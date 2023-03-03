import axios from 'axios';

const CORSAnywhere = 'https://charming-bat-singlet.cyclic.app/';

const instance = axios.create({
  baseURL: `${CORSAnywhere}https://cerulean-marlin-wig.cyclic.app/`,
});

export default instance
