import { Description, Name, Image, Tag, Location } from "./Profile.styled";
import PropTypes from "prop-types";
import "../../index.css";

export const Profile = ({ username, tag, location, avatar }) => {
  return (
    <Description>
      <Image src={avatar} alt="User avatar" />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>
  );
};

Profile.protoTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
