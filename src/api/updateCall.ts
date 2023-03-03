import axios from '~/instances/axios';

export default async (id: string, archive: boolean) => {
  const res = await axios.patch(`activities/${id}`, { is_archived: archive });
  return res.data;
};
