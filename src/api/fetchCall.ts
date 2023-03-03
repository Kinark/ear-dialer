import axios from '~/instances/axios';
import { CallEntryObj } from '~/components/CallEntry';

export default async (id: string) => {
  const res = await axios.get<CallEntryObj>(`activities/${id}`);
  return res.data;
};
