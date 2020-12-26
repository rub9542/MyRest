import {REQUEST_TODOS_DATA, recieveTodosData} from '../actions'; 
import {fetchData} from './api';

function* getApiData(action) {
    try{
        const data = yield call(fetchData);
        yield put(recieveTodosData(data));
    }catch(e) {
        console.log(e);
    }}
export default function* mySaga(){
    yield takeLatest(REQUEST_TODOS_DATA, getApiData)
} 