import { $get } from '../request';
import { IToDo } from './type';

const PATH = 'todos';

const getTodos = async (cookie?: any) => {
  const res: IToDo[] = await $get(null, `${PATH}`, cookie);

  return res;
};

export {
  getTodos,
};
