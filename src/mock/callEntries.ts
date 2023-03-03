import { CallEntryObj, CallDirections } from '~/components/CallEntry';

const { INCOMING, OUTGOING, REFUSED } = CallDirections;

const callEntries: CallEntryObj[] = [
  {
    id: '1',
    type: INCOMING,
    date: '2023-02-17 13:37',
    duration: 630,
    from: '123-456-7890',
  },
  {
    id: '2',
    type: OUTGOING,
    date: '2023-01-13 16:31',
    duration: 186,
    from: '845-909-7771',
  },
  {
    id: '3',
    type: OUTGOING,
    date: '2023-01-01 9:01',
    duration: 368,
    from: '128-843-3895',
  },
  {
    id: '4',
    type: REFUSED,
    date: '2023-02-02 13:18',
    duration: 985,
    from: '567-197-1970',
  },
];

export default callEntries;
