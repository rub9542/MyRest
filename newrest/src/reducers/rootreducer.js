import { combineReducers} from 'redux';
import comments from './commentsReducer';
// import albums from './albumReducer';
import albums from './albumReducer';


const rootReducer = combineReducers({
    comments :comments,
    albums:albums,
})
export default rootReducer;