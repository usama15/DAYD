import {Alert} from 'native-base';
import {apiService} from '../../../utils/api-services';
import {saveDataInPhone} from '../../../utils/localStore';

const postDoctorData = async (data) => {
  return new Promise((resolve, reject) => {
    apiService('post', '/getDoctor', data).then(
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

export {postDoctorData};
