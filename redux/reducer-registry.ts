/**
 * See http://nicolasgallagher.com/redux-modules-and-code-splitting/
 * for reasoning and explanations on how this works
 */

class ReducerRegistry {
  private emitChange = null;
  private reducers = {};

  getReducers() {
    return { ...this.reducers };
  }

  register(name, reducer) {
    this.reducers = { ...this.reducers, [name]: reducer };
    if (this.emitChange) {
      this.emitChange(this.getReducers());
    }
  }

  setChangeListener(listener) {
    this.emitChange = listener;
  }

  // Preserve initial state for not-yet-loaded reducers
  getCombinedReducers(initialState = {}) {
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
