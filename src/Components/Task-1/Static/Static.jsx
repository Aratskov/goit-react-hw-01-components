import { StaticList, StaticItem, Label, Quantity } from "./Static.styled";
import PropTypes from "prop-types";

export const Static = ({ followers, views, likes }) => {
  return (
    <StaticList>
      <StaticItem>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </StaticItem>
      <StaticItem>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </StaticItem>
      <StaticItem>
        <Label>likes</Label>
        <Quantity>{likes}</Quantity>
      </StaticItem>
    </StaticList>
  );
};

Static.protoTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};


