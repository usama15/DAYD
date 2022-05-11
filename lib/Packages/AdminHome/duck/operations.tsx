import {Alert} from 'native-base';
import {apiService} from '../../../utils/api-services';
import {saveDataInPhone} from '../../../utils/localStore';

const getVendorData = async () => {
  return new Promise((resolve, reject) => {
    apiService('get', '/getVendor', null).then(
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
const getImagesData = async () => {
  return new Promise((resolve, reject) => {
    apiService('get', '/getImages', null).then(
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
const RegisterDoctor = async data => {
  return new Promise((resolve, reject) => {
    apiService('post', '/createUser', data).then(
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
const RegisterAmbulance = async data => {
  return new Promise((resolve, reject) => {
    apiService('post', '/createUser', data).then(
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
const SilderImagePost = async data => {
  return new Promise((resolve, reject) => {
    apiService('post', '/createImage', data).then(
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

const deleteVendor = async id => {
  return new Promise((resolve, reject) => {
    apiService('delete', '/delVendor/' + id, null).then(
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
const deleteUser = async id => {
  return new Promise((resolve, reject) => {
    apiService('delete', '/deleteUser/' + id, null).then(
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
const deleteSilderImage = async id => {
  return new Promise((resolve, reject) => {
    apiService('delete', '/delImage/' + id, null).then(
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

export {
  getVendorData,
  RegisterDoctor,
  deleteVendor,
  RegisterAmbulance,
  GetUserData,
  deleteUser,
  SilderImagePost,
  deleteSilderImage,
  getImagesData
};
