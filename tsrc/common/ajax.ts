

import axios from 'axios';
import { Toast } from 'cyd'



const baseURL = ''


interface Data {
  params?: object,
  data?: object
}

const ajax = (type:string, url:string='', params:object={}) => {
  let _data: Data = {};
  if(type === 'get'){
    _data.params = params
  }else{
    _data.data = params
    // _data.transformRequest = [function (data) {
    //   let ret = ''
    //   for (let it in data) {
    //     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    //   }
    //   return ret
    // }]
  }
  let requestBody = {
    url,
    method: type,
    timeout: 6000,
    baseURL,
    responseType: 'json',
    ..._data
  }
  return axios(requestBody).then(res => res.data).catch( error => {
    Toast.info('网络连接失败，请检查您的网络设置并稍后再试', 2, null, false)
  })
}





export const ajaxGet = (url:string, params:object) => ajax('get', url, params)
export const ajaxPost = (url:string, params:object) => ajax('post', url, params)
export const ajaxPut = (url:string, params:object) => ajax('put', url, params)
export const ajaxDelete = (url:string, params:object) => ajax('delete', url, params)