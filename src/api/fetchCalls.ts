import axios from '~/instances/axios';
import { CallEntryObj } from '~/components/CallEntry';

export default async () => {
  const res = await axios.get<CallEntryObj[]>('activities');
  return res.data.filter((call: any) => !!call.from).sort((a: any, b: any) => b.created_at - a.created_at);
};
