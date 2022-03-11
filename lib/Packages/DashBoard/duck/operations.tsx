import {apiService} from '../../../utils/api-services';

const GetUserData = async () => {
  return new Promise((resolve, reject) => {
    apiService('get', '/getUsers', null).then(
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

export {GetUserData};
