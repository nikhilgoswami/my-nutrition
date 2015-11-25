import React, { PropTypes } from 'react';

const Notification = ({ children, level, onDismiss }) => (
  <div className={`alert alert-${level} growl`} role="alert">
    <button type="button" className="close" aria-label="Close" onClick={onDismiss}>
      <span aria-hidden="true">&times;</span>
      <span className="sr-only">Close</span>
    </button>
    {children}
  </div>
);

Notification.propTypes = {
  children: PropTypes.node,
  level: PropTypes.string.isRequired,
  onDismiss: PropTypes.func,
};

export default Notification;
