import { useState } from 'react';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';

import OptionsList from '~/components/OptionsList';
import Img from '~/components/Img';
import LoaderOverlay from '~/components/LoaderOverlay';

import incomingIcon from '~/assets/images/phone-incoming-fill.svg';
import outgoingIcon from '~/assets/images/phone-outgoing-fill.svg';
import archiveIcon from '~/assets/images/archive-fill.svg';
import megaphoneIcon from '~/assets/images/megaphone-fill.svg';
import smileyIcon from '~/assets/images/smiley-blank-fill.svg';

import contacts from '~/mock/contacts';
import capitalize from '~/utils/capitalize';
import commonVariants from '~/utils/commonVariants';

import {
  TimeWrapper,
  Button,
  Wrapper,
  Main,
  CallIcon,
  MainInfo,
  EntryContent,
  ButtonsRow,
  NumberSection,
} from './styledComponents';

export enum CallDirections {
  INCOMING = 'inbound',
  OUTGOING = 'outbound',
}

export enum CallTypes {
  ANSWERED = 'answered',
  MISSED = 'missed',
  VOICEMAIL = 'voicemail',
}

export interface CallEntryObj {
  id: string;
  created_at: string;
  direction: CallDirections;
  from: number;
  to: number;
  via: number;
  duration: number;
  is_archived: boolean;
  call_type: CallTypes;
}

const directionsIcons = {
  [CallDirections.INCOMING]: incomingIcon,
  [CallDirections.OUTGOING]: outgoingIcon,
};

interface CallEntryProps {
  loading: boolean;
  entry: CallEntryObj;
  active: boolean;
  setActive: () => void;
  toggleArchive: () => void;
  archiveVisible: boolean;
}

const CallEntry = ({ loading, entry, active, setActive, toggleArchive, archiveVisible }: CallEntryProps) => {
  const contact = contacts.find((contact) => contact.number === entry.from);
  const time = dayjs(entry.created_at);
  return (
    <motion.div layout="position" initial="removed" animate="visible" exit="removed" variants={commonVariants}>
      <Wrapper active={active}>
        {loading && <LoaderOverlay />}
        <Main onClick={setActive}>
          <CallIcon type={entry.call_type} active={active}>
            <Img src={directionsIcons[entry.direction]} />
          </CallIcon>
          <MainInfo>
            <div>{contact?.name || entry.from}</div>
            <div>
              {entry.duration > 60 ? (entry.duration / 60).toFixed(0) : entry.duration}{' '}
              {entry.duration > 60 ? 'minutes' : 'seconds'}
            </div>
          </MainInfo>
          <TimeWrapper>
            <div>{time.format('HH:mm')}</div>
            <div>{time.format('MM/DD/YYYY')}</div>
          </TimeWrapper>
        </Main>
        {active && (
          <EntryContent>
            <ButtonsRow>
              <Button>Call</Button>
              <Button>Message</Button>
            </ButtonsRow>
            <NumberSection>
              <div>{entry.from}</div>
              <div>{capitalize(entry.call_type)}</div>
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
