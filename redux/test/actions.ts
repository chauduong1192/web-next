import { TEST_REDUX } from './types';

const testRedux = (string) => {
  return {
    type: TEST_REDUX,
    payload: {
      test: string,
    },
  };
};

export  {
  testRedux,
};
