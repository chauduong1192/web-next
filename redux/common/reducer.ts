import { IGenericStoreAction } from '@redux/types';

import { COMMON_ACTION } from './types';

export interface ICommonState {
  isCommon?: boolean;
  initialised: boolean;
}

const initialState = {
  initialised: false,
  isCommon: false,
};

const reducer = (
  state: ICommonState = initialState,
  action: IGenericStoreAction,
) => {
  switch (action.type) {
    case COMMON_ACTION:
      return {
        ...state,
        isCommon: true,
      };
    default:
      return state;
  }
};

export default reducer;
