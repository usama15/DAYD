import {apiService} from '../../../utils/api-services';

const GetOrderData = async () => {
  return new Promise((resolve, reject) => {
    apiService('get', '/getOrder', null).then(
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
const OrderConform = async data => {
  return new Promise((resolve, reject) => {
    apiService('post', '/createOrderConform', data).then(
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
const deleteOrder = async (id: any) => {
  return new Promise((resolve, reject) => {
    apiService('delete', '/delOrder/' + id, null).then(
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

export {GetOrderData, OrderConform, GetConformOrderData, deleteOrder};
