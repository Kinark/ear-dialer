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

import { Button, Wrapper, Main, CallIcon, MainInfo, EntryContent, ButtonsRow, NumberSection } from './styledComponents';

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
  const contact = contacts.find((contact) => contact.number === entry.from);
  return (
    <motion.div layout="position" initial="removed" animate="visible" exit="removed" variants={commonVariants}>
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
