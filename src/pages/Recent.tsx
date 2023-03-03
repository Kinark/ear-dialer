import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import styled from 'styled-components';
import { AnimatePresence, LayoutGroup } from 'framer-motion';

import CallEntry from '~/components/CallEntry';
import Img from '~/components/Img';
import Separator from '~/components/Separator';

import archiveIcon from '~/assets/images/archive-fill.svg';
import { callsListAtom, archivedCallsListAtom } from '~/atoms/callsList';
import shrinkOnPress from '~/utils/shrinkOnPress';
import updateCall from '~/api/updateCall';

const Recent = () => {
  const [callEntries, dispatch] = useAtom(callsListAtom);
  const [seeArchive, setSeeArchive] = useState(false);
  const [activeCall, setActiveCall] = useState<string | null>(null);
  const [loadingCalls, setLoadingCalls] = useState<string[]>([]);

  const calls = callEntries.filter(el => seeArchive ? el.is_archived : !el.is_archived );

  const toggleArchiveItem = async (id: string) => {
    const item = callEntries.find((item) => item.id === id)!;
    if (!item) return;
    setActiveCall(null);
    setLoadingCalls((val) => [...val, id]);
    await updateCall(id, !item.is_archived);
    await dispatch({ type: 'refetch' })
    setLoadingCalls((val) => val.filter((item) => item !== id));
  };

  useEffect(() => {
    setActiveCall(null);
  }, [seeArchive]);

  return (
    <Content>
      <TitleBar>
        <h1>Heard recent</h1>
        <ArchiveButton onClick={() => setSeeArchive((val) => !val)} active={seeArchive}>
          <Img src={archiveIcon} />
        </ArchiveButton>
      </TitleBar>
      <EntriesList>
        <LayoutGroup>
          <AnimatePresence>
            {seeArchive && <Separator>Archived</Separator>}
            {calls.map((entry) => (
              <CallEntry
                key={entry.id}
                loading={loadingCalls.includes(entry.id)}
                entry={entry}
                active={activeCall == entry.id}
                setActive={() => setActiveCall(activeCall == entry.id ? null : entry.id)}
                toggleArchive={() => toggleArchiveItem(entry.id)}
                archiveVisible={seeArchive}
              />
            ))}
          </AnimatePresence>
        </LayoutGroup>
      </EntriesList>
    </Content>
  );
};

export default Recent;

const Content = styled.main`
  padding: 72px 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
`;

const ArchiveButton = styled.button<{ active: boolean }>`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.bottomBar};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ active }) => (active ? 0.5 : 1)};
  ${shrinkOnPress}
`;

const EntriesList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 0;
`;
