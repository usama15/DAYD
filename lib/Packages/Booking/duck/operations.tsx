import {apiService} from '../../../utils/api-services';

const createOrderData = async (data: any) => {
  return new Promise((resolve, reject) => {
    apiService('post', '/createOrder', data).then(
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

export {createOrderData};
