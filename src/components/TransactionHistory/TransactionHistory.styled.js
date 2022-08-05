import styled from "styled-components";

export const TransactionTableHead = styled.thead`
    height: 35px;
    background-color: ${p => p.theme.colors.tableHead};
    font-size: ${p => p.theme.fontSizes.m};
`;

export const TransactionTableRow = styled.tr`
    height: 35px;
    text-align: center;

    :nth-of-type(odd) {
        background-color: ${p => p.theme.colors.primary};
    }
    &:nth-of-type(even) {
        background-color: ${p => p.theme.colors.secondary};
    }
`;

export const TransactionTableData = styled.td`
    font-size: ${p => p.theme.fontSizes.s};
`;