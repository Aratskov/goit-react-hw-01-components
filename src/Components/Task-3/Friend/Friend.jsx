import { Online, Image, Name } from "./Friend.styled";
import PropTypes from "prop-types";

export const Friend = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <Online>{isOnline}</Online>
      <Image src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </>
  );
};

Friend.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
