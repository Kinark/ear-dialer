import { atomWithStorage } from 'jotai/utils';
import { CallEntryObj } from '~/components/CallEntry';

import callEntries from '~/mock/callEntries';

export const callsListAtom = atomWithStorage('callsList', callEntries.map((callEntry) => callEntry));
export const archivedCallsListAtom = atomWithStorage<CallEntryObj[]>('archivedCallsList', []);
