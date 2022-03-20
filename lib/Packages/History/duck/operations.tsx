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

export {GetConformOrderData};
