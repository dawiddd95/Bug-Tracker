import React from 'react';
import PropTypes from 'prop-types';
import { Table as TableAntd } from 'antd';
import 'antd/dist/antd.css';
import * as S from './StyledTable';

const Table = ({data, columns, isLoading}) => {
    return (
        <S.Wrapper>
            <TableAntd dataSource={data} columns={columns} loading={isLoading} scroll={{ x: 1024 }} />
        </S.Wrapper>
    );
}

/* eslint-disable */
Table.propTypes = {
	data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
};
/* eslint-enable */

export default Table;
