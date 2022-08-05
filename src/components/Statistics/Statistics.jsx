import PropTypes from "prop-types";
import { Box } from "components/Box";
import {
    StatisticsTitle,
    StatList,
    StatListItem,
    StatItemLabel,
    StatItemPercentage
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        <Box as="section"
            pt={5}
            pb={5}
        >
            <Box
                width="400px"
                mr="auto"
                ml="auto"
                border="normal"
                borderColor="text"
                borderRadius="normal"
                boxShadow="0px 4px 24px -1px rgba(0,0,0,0.75)"
                overflow="hidden">
                {title && <StatisticsTitle>{title}</StatisticsTitle>}
            <StatList>
                {stats.map(({ id, label, percentage, idx }) =>
                (<StatListItem key={id} index={idx}>
                    <StatItemLabel>{label}</StatItemLabel>
                    <StatItemPercentage>{percentage}%</StatItemPercentage>
                </StatListItem>))}
                </StatList>
            </Box>
        </Box>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};
