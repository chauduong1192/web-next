import { $get } from './request';

const PATH = 'lists';

const getLists = async (cookie?: any) => {
  const res = await $get(`${PATH}`, cookie);

  return res;
};

export {
  getLists,
};
