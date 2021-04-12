import styled from 'styled-components';
import { StyledLink } from 'components/atoms/Link/Link';

export const Link = styled(StyledLink)`
 	margin-right: 20px;
`

/* eslint-disable */
export const ticketsColumns = [
    {
        title: 'Id', 
        dataIndex: 'id', 
        key: 'id'
    },
    {
        title: 'Title', 
        dataIndex: 'title', 
        key: 'title'
    },
    {
        title: 'Description', 
        dataIndex: 'description', 
        key: 'description',
    },
    {
        title: 'Priority', 
        dataIndex: 'priority', 
        key: 'priority'
    },
    { 
        title: 'Action', 
        key: 'action',
        render: ({id, projectId}) => 
        <>
            <Link color to={`/user/projects/${projectId}/tickets/${id}`}>View</Link>
            <Link color to={`/user/projects/${projectId}/tickets/${id}/edit`}>Edit</Link>
        </>
    },
];

export const projectsColumns = [
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
            <Link color to={`/user/projects/${id}`}>View</Link>
            <Link color to={`/user/projects/${id}/edit`}>Edit</Link>
        </>
    },
];
/* eslint-enable */