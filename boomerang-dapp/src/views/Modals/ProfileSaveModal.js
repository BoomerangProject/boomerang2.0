import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ProfileSaveModal extends Component {
  render() {
    return (
      <div className="modal-overlay">
        <div className="modal-body">
          <div className="modal-content">
            <p className="modal-text">
              This transaction is being mined, check the status bar for updates.
            </p>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => this.props.hideModal()}
              className="modal-btn"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ProfileSaveModal.propTypes = {
  hideModal: PropTypes.func
};

export default ProfileSaveModal;
