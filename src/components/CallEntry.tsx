import { useState } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';

import OptionsList from '~/components/OptionsList';
import Img from '~/components/Img';

import incomingIcon from '~/assets/images/phone-incoming-fill.svg';
import outgoingIcon from '~/assets/images/phone-outgoing-fill.svg';
import refusedIcon from '~/assets/images/phone-x-fill.svg';
import archiveIcon from '~/assets/images/archive-fill.svg';
import megaphoneIcon from '~/assets/images/megaphone-fill.svg';
import smileyIcon from '~/assets/images/smiley-blank-fill.svg';

import contacts from '~/mock/contacts';
import commonVariants from '~/utils/commonVariants';
import shrinkOnPress from '~/utils/shrinkOnPress';

export enum CallTypes {
  INCOMING = 'incoming',
  OUTGOING = 'outgoing',
  REFUSED = 'refused',
}

export interface CallEntryObj {
  id: string;
  type: CallTypes;
  date: string;
  duration: number;
  from: string;
}

const typesIcons = {
  [CallTypes.INCOMING]: incomingIcon,
  [CallTypes.OUTGOING]: outgoingIcon,
  [CallTypes.REFUSED]: refusedIcon,
};

interface CallEntryProps {
  entry: CallEntryObj;
  active: boolean;
  setActive: () => void;
  toggleArchive: () => void;
  archiveVisible: boolean;
}

const CallEntry = ({ entry, active, setActive, toggleArchive, archiveVisible }: CallEntryProps) => {
  const [groupRemoval, setGroupRemoval] = useState(false);
  const contact = contacts.find((contact) => contact.number === entry.from);

  return (
    <motion.div
      layout="position"
      initial="removed"
      animate="visible"
      exit="removed"
      variants={commonVariants}
    >
      <Wrapper active={active}>
        <Main onClick={setActive}>
          <CallIcon type={entry.type} active={active}>
            <Img src={typesIcons[entry.type]} />
          </CallIcon>
          <MainInfo>
            <div>{contact?.name || entry.from}</div>
            <div>{(entry.duration / 60).toFixed(0)} minutes</div>
          </MainInfo>
          <div>{dayjs(entry.date).format('HH:mm')}</div>
        </Main>
        {active && (
          <EntryContent>
            <ButtonsRow>
              <Button>Call</Button>
              <Button>Message</Button>
            </ButtonsRow>
            <NumberSection>
              <div>{entry.from}</div>
              <div>Kansas</div>
            </NumberSection>
            <OptionsList
              options={[
                { label: `${archiveVisible ? 'Una' : 'A'}rchive call`, icon: archiveIcon, onClick: toggleArchive },
                { label: 'Share contact', icon: megaphoneIcon, onClick: () => {} },
                { label: 'Block caller', icon: smileyIcon, onClick: () => {} },
              ]}
            />
          </EntryContent>
        )}
      </Wrapper>
    </motion.div>
  );
};

export default CallEntry;

const Button = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: block;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.button};
  font-size: ${({ theme }) => theme.font.sizes.body};
  color: ${({ theme }) => theme.colors.body};
  border-radius: 100px;
  text-align: center;
  flex: 1;
  ${shrinkOnPress};
`;

const Wrapper = styled(motion.div)<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 36px;
  padding: ${({ active }) => (active ? '14px 16px' : '0')};
  padding-right: 24px;
  height: ${({ active }) => (active ? '384.5' : '72')}px;
  transition: ${({
    theme: {
      animation: { easings },
    },
  }) => `padding ${easings.default}, height ${easings.default}, transform ${easings.quick}`};
  overflow: hidden;
  ${({ active }) =>
    !active &&
    css`
      &:active {
        transform: scale(0.97);
      }
    `}
  margin-bottom: 16px;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.sizes.tiny};
`;

const CallIcon = styled.div<{ type: CallTypes; active: boolean }>`
  height: 72px;
  width: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: ${({ active }) => (active ? 0 : 3)}px;
  border-top-left-radius: 100px;
  border-top-right-radius: ${({ active }) => (active ? 100 : 32)}px;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: ${({ active }) => (active ? 100 : 32)}px;
  background-color: ${({ theme, type }) => theme.colors[type]};
  transition: border-radius 300ms ease-out;
`;

const MainInfo = styled.div`
  display: block;
  font-size: ${({ theme }) => theme.font.sizes.body};
  flex: 1;
  & div:first-child {
    font-size: ${({ theme }) => theme.font.sizes.smallTitle};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.body};
  }
`;

const EntryContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

const ButtonsRow = styled.div`
  display: flex;
  gap: 8px;
`;

const NumberSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0px;
  gap: 4px;
  color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: 16px;
  font-size: ${({ theme }) => theme.font.sizes.tiny};
  & div:first-child {
    font-size: ${({ theme }) => theme.font.sizes.body};
    color: ${({ theme }) => theme.colors.body};
  }
`;
