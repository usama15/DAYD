import axios from 'axios';
// import {getDataFromPhone} from './localStore';
const baseUrl = 'https://dayd.herokuapp.com/api';

// let userToken = '';
// let userName = '';

export async function apiService(method, uri, data, params) {
//   await getDataFromPhone('userToken').then(res => {
//     console.log('userToken', res);
//     userToken = res;
//   });
//   await getDataFromPhone('userName').then(res => {
//     userName = res;
//   });
  console.log(arguments);
  let query = {
    method: method,
    url: uri ? baseUrl + uri : baseUrl,
    // headers:
    //   userToken && userName
    //     ? {
    //         'x-access-username-a': userName,
    //         'x-access-token': userToken,
    //       }
    //     : null,
  };
  // if (headers != null) {
  //     query.headers = headers;
  // }

  if (params !== null) {
    query.params = params;
  }

  if (
    method === 'post' ||
    method === 'put' ||
    method === 'delete' ||
    method === 'patch'
  ) {
    query.data = data;
  }

  // console.log("Query after header & params: ", query);

  return axios(query);
}
