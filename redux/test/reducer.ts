import { IGenericStoreAction } from '../types';

import { TEST_REDUX } from './types';

export interface ITestState {
  test?: boolean;
  initialised: boolean;
  test2: any;
}

const initialState = {
  initialised: false,
  test: true,
  test2: 'test',
};

const reducer = (
  state: ITestState = initialState, action: IGenericStoreAction = { type: null },
) => {
  switch (action.type) {
    case TEST_REDUX:
      const { payload } = action;
      return {
        ...state,
        test2: payload.test,
      };
    default:
      return state;
  }
};

export default reducer;
