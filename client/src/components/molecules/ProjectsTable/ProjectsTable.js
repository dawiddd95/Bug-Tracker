import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import { getAllProjects } from 'app/projects/operations';
import 'antd/dist/antd.css';
import * as S from './StyledProjectsTable';

/* eslint-disable */
const columns = [
    {
        title: 'Id', 
        dataIndex: 'id', 
        key: 'id'
    },
    {
        title: 'Name', 
        dataIndex: 'name', 
        key: 'name'
    },
    {
        title: 'Description', 
        dataIndex: 'description', 
        key: 'description',
    },
    { 
        title: 'Action', 
        key: 'action',
        render: ({id}) => 
        <>
            <S.Link color to={`/user/projects/${id}`}>View</S.Link>
            <S.Link color to={`/user/projects/${id}/edit`}>Edit</S.Link>
        </>
    },
];
/* eslint-enable */



const ProjectsTable = () => {
    const dispatch = useDispatch();
    const {projects} = useSelector(state => state.projects)
    const [isLoading, setIsLoading] = useState(false);

    useEffect( async () => {
        setIsLoading(true);
        await dispatch(getAllProjects());
        setIsLoading(false);
     }, [])

    return (
        <S.Wrapper>
            <Table dataSource={projects} columns={columns} loading={isLoading} />
        </S.Wrapper>
    );
}
 
export default ProjectsTable;
