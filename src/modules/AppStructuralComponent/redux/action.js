import axios from "axios";

export const actionConstants = {
  RESPONSE_DATA_FROM_SERVER: "RESPONSE_DATA_FROM_SERVER"
};

const GetREquestData = data => {
 return {
    type: actionConstants.RESPONSE_DATA_FROM_SERVER, data
  }
};

export const ActionCreator = {
  GetREquestData
}

const getHomePageData = () => {
  
  return dispatch => {
    return axios
      .get("http://172.20.10.11:9000/api/home")
      .then(response => {
        dispatch(GetREquestData(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const actionFeatures = {
  getHomePageData
};
