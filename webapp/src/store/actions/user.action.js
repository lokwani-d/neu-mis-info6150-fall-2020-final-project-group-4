import * as ActionTypes from './action-types';

// export const loginUser = (userData) => {
//     return { type: ActionTypes.LOGIN_USER, payload: userData }
// }

export const loginUser = userData => dispatch => {
  let loginUrl = '/login/';
  fetch(loginUrl, {
    method: 'POST',
    body: JSON.stringify({
      "email": this.state.email,
      "password": this.state.password,
      "role": this.state.role
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
  .then((responseJson) => {
    alert(responseJson.message);
    if (responseJson.status >= 200 && responseJson.status < 300) {
      dispatch({ type: ActionTypes.LOGIN_USER, payload: responseJson})
    } else {
      dispatch({ type:ActionTypes.ERRORS, responseJson})
    }
  })
  .catch(err =>
    dispatch({
      type: ActionTypes.ERRORS,
      payload: err.response.data
    })
  );
};
