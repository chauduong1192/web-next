import { Reducer } from 'redux-testkit';
import reducer from '../../../redux/common/reducer';
import * as commonTypes from '../../../redux/common/types';

describe('common reducer', () => {
  const initialState = {
    initialised: false,
    isCommon: false,
  };

  it('should handle COMMON_ACTION action on existing state', () => {
    const action = { type: commonTypes.COMMON_ACTION };
    const result = {
      initialised: false,
      isCommon: true,
    };
    Reducer(reducer)
      .withState(initialState)
      .expect(action)
      .toReturnState(result);
  });
});
