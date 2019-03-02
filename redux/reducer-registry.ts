/**
 * See http://nicolasgallagher.com/redux-modules-and-code-splitting/
 * for reasoning and explanations on how this works
 */

class ReducerRegistry {
  private emitChange = null;
  private reducers = {};

  public getReducers() {
    return { ...this.reducers };
  }

  public register(name, reducer) {
    this.reducers = { ...this.reducers, [name]: reducer };
    if (this.emitChange) {
      this.emitChange(this.getReducers());
    }
  }

  public setChangeListener(listener) {
    this.emitChange = listener;
  }

  // Preserve initial state for not-yet-loaded reducers
  public getCombinedReducers(initialState = {}) {
    const reducers = this.getReducers();
    const reducerNames = Object.keys(reducers);
    Object.keys(initialState).forEach((item) => {
      if (reducerNames.indexOf(item) === -1) {
        reducers[item] = (state = null) => state;
      }
    });
    return reducers;
  }
}

const reducerRegistry = new ReducerRegistry();
export { reducerRegistry };
export default reducerRegistry;
