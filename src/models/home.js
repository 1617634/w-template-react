import API from '@/common/API'
import { ajaxGet } from '@/common/ajax'

export default {
  namespace: 'home',

  state: {
    data: {},
  },

  effects: {
    *fetch(_, { call, put }) {
      const res = yield call(ajaxGet, API.homeList)
      let { code, data, desc } = res;
      if(code === '1'){
        yield put({
          type: 'saveData',
          payload: data,
        });
      }
      
    },
    *clear(_, { call, put }){
      yield put({
        type: 'clearData'
      });
    }
  },
  
  reducers: {
    saveData(state, {payload}) {
      return {
        data: payload
      }
    },
    clearData(){
      return {
        home_data: {},
        rank_list:  [],
      }
    }
   
  },
};
