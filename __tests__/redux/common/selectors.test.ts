import { Selector } from 'redux-testkit';
import * as selectors from '@redux/common/selectors';

describe('common selector', () => {

  it('should select isCommon in common state', () => {
    const state = { common: { isCommon: true } };
    const result = true;
    Selector(selectors.getCommon).expect(state).toReturn(result);
  });
});
