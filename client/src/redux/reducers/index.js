import { combineReducers } from 'redux';
import resultReducer from './result';

const rootReducer = combineReducers({ textAnalysis: resultReducer });

export default rootReducer;