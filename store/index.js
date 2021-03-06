import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage, YellowBox } from 'react-native';
import reducers from '../reducers';

YellowBox.ignoreWarnings(['Remote debugger']);

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    autoRehydrate(),
  )
);

persistStore(store, { storage: AsyncStorage, whitelist: ['likedJobs'] });
export default store;
