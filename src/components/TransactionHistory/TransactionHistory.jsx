import PropTypes from 'prop-types';
import {
    TransactionTableHead,
    TransactionTableRow,
    TransactionTableData
} from 'components/TransactionHistory/TransactionHistory.styled';
import { Box } from 'components/Box';

export const TransactionHistory = ({ items }) => {
    return (
        < Box as="table"
            width="400px"
            mr="auto"
            ml="auto"
            border="normal"
            borderColor="text"
            borderRadius="normal"
            boxShadow="0px 4px 24px -1px rgba(0,0,0,0.75)"
            overflow="hidden"
        >
            <TransactionTableHead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </TransactionTableHead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <TransactionTableRow key={id}>
                        <TransactionTableData>{type}</TransactionTableData>
                        <TransactionTableData>{amount}</TransactionTableData>
                        <TransactionTableData>{currency}</TransactionTableData>
                    </TransactionTableRow>
                ))}
            </tbody>
        </Box>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired,
};