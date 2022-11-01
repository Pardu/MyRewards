import { combineReducers } from 'redux'

import rewardsReducer from './rewardsReducer'
import userReducer from './userReduser'

const rootReducer = combineReducers({
  rewards: rewardsReducer,
  user: userReducer,
})

export default rootReducer