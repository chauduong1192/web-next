import { COMMON_ACTION } from './types';

const commonAction = () =>
(dispatch) => {
  dispatch({
    type: COMMON_ACTION,
    payload: true,
  });
};

export  {
  commonAction,
};
