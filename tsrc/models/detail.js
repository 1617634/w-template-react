import API from '@/common/API'
import { ajaxGet } from '@/common/ajax'

export default {
  namespace: 'detail',

  state: {
    data: {},
  },

  effects: {
    *fetch(_, { call, put }) {
      const res = yield call(ajaxGet, API.detailData);
      console.log(res);
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
       data:{}
      }
    }
   
  },
};