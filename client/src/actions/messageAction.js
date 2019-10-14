import axios from 'axios';
import { setAlert } from './action-set-alert';
import { SEND_MESSAGE, GET_MESSAGES, MESSAGE_ERROR } from './types-of-actions';
//Get posts
const getMessages = () => async dispatch => {
  try {
    const res = await axios.get('/api/message/5d83426b99fb2054321bdb9d/5d9993ef4246a009704c3410');
    dispatch({
      type: GET_MESSAGES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
export default getMessages;

// Add COMMENT

// export const addComment = (postId, formData) => async dispatch => {
//   const config = {
//     headers: { 'Content-Type': 'application/json' },
//   };
//   try {
//     const res = await axios.post(`/api/posts/comment/${postId}`, formData, config);
//     dispatch({
//       type: ADD_COMMENT,
//       payload: res.data,
//     });
//     dispatch(setAlert('Comment Added', 'success'));
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };
