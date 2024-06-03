import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Profile.scss';

function Profile(props) {
  const avatar = props.avatar === '' ? props.defaultImg : props.avatar;
  return (
    <div className="profile">
      <div
        className={props.scssClass}
        style={{ backgroundImage: `url(${avatar})` }}
      ></div>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;
