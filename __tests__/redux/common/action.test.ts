import { Thunk } from 'redux-testkit';
import * as actions from '../../../redux/common/actions';
import * as commonTypes from '../../../redux/common/types';

describe('common actions', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should call common action', () => {
    const dispatches = Thunk(actions.commonAction).execute();
    expect(dispatches[0].getAction()).toEqual({ type: commonTypes.COMMON_ACTION, payload: true });
  });
});
