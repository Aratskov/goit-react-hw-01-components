import {
  Statistic,
  Title,
  StaticList,
  StaticItem,
  Label,
  Percentage,
} from "./StatisticList.styled";
import PropTypes from "prop-types";

export const StatisticList = ({ title = "Upload stats", items }) => {
  return (
    <Statistic>
      <Title>{title}</Title>

      <StaticList>
        {items.map(({ id, label, percentage }) => (
          <StaticItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StaticItem>
        ))}
      </StaticList>
    </Statistic>
  );
};

StatisticList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};


