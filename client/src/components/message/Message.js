import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import getMessages from '../../actions/messageAction';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';

const Message = ({ getMessages, message: { messages, loading, error } }) => {
  useEffect(() => {
    getMessages();
  }, [getMessages]);
  return loading || messages === [] ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='comments'>
        {messages.map(message => {
          return <p className='lead'>{message.text}</p>;
        })}
      </div>
    </Fragment>
  );
};

Message.propTypes = {
  getMessages: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  message: state.message,
});
export default connect(
  mapStateToProps,
  { getMessages },
)(Message);
