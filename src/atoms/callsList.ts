import { atomWithStorage } from 'jotai/utils';
import { atomsWithQuery } from 'jotai-tanstack-query'

import { CallEntryObj } from '~/components/CallEntry';

import fetchCalls from '~/api/fetchCalls';

export const archivedCallsListAtom = atomWithStorage<CallEntryObj[]>('archivedCallsList', []);

export const [callsListAtom] = atomsWithQuery<CallEntryObj[]>((get) => ({
  queryKey: ['callsList'],
  queryFn: fetchCalls,
}))
