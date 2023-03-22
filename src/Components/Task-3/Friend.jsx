import PropTypes from "prop-types";

const Friend = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <span className="status">{isOnline ? console.log('green') : console.log('red')}</span>
      <img className="avatar-3" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
};

Friend.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default Friend;
