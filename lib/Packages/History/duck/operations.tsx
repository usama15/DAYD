import {apiService} from '../../../utils/api-services';

const GetConformOrderData = async () => {
  return new Promise((resolve, reject) => {
    apiService('get', '/getOrderConform', null).then(
      res => {
        let responseData = res.data;
        resolve(responseData);
      },
      err => {
        let errorResponse = err.response.data;
        reject(errorResponse);
        alert(errorResponse.text);
      },
    );
  });
};
const createHistory = async (data:any) => {
  return new Promise((resolve, reject) => {
    apiService('post', '/createHistory', data).then(
      res => {
        let responseData = res.data;
        resolve(responseData);
      },
      err => {
        let errorResponse = err.response.data;
        reject(errorResponse);
        alert(errorResponse.text);
      },
    );
  });
};
const updateHistory = async (id:any,data:any) => {
  return new Promise((resolve, reject) => {
    apiService('put', '/updateOrderConform/'+id, data).then(
      res => {
        let responseData = res.data;
        resolve(responseData);
      },
      err => {
        let errorResponse = err.response.data;
        reject(errorResponse);
        alert(errorResponse.text);
      },
    );
  });
};
const getUserHistory = async () => {
  return new Promise((resolve, reject) => {
    apiService('get', '/getHistory', null).then(
      res => {
        let responseData = res.data;
        resolve(responseData);
      },
      err => {
        let errorResponse = err.response.data;
        reject(errorResponse);
        alert(errorResponse.text);
      },
    );
  });
};

export {GetConformOrderData, createHistory, updateHistory, getUserHistory};
