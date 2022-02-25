import {Alert} from 'native-base';
import {apiService} from '../../../utils/api-services';
import {saveDataInPhone} from '../../../utils/localStore';

const SignInUser = async (data) => {
  return new Promise((resolve, reject) => {
    apiService('post', '/loginUser', data).then(
      res => {
        let responseData = res.data;
        resolve(responseData);
        saveDataInPhone('Token', (responseData.token));
        saveDataInPhone('UserType', (responseData.userType));
        
      },
      err => {
        let errorResponse = err.response.data;
        console.log(errorResponse)
        reject(errorResponse);
        alert(errorResponse.text);
      },
    );
  });
};

export {SignInUser};
