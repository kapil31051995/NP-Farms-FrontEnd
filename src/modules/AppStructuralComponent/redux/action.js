import axios from "axios";

export const actionConstants = {
  RESPONSE_DATA_FROM_SERVER: "RESPONSE_DATA_FROM_SERVER"
};

const GetRequestData = data => {
 return {
    type: actionConstants.RESPONSE_DATA_FROM_SERVER, data
  }
};

export const ActionCreator = {
  GetRequestData
}

const getHomePageData = () => {
  
  return dispatch => {
    return axios
      .get("http://172.20.10.11:9000/api/home")
      .then(response => {
        dispatch(GetRequestData(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const actionFeatures = {
  getHomePageData
};
