import React, { useState, useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { ThemeContext } from 'context';
import { routes } from 'routes/index';
import actions from 'app/projects/actions';
import { projectsApi } from 'utils/api';
import binIcon from 'assets/icons/bin.svg';
import newIcon from 'assets/icons/new.svg';
import editIcon from 'assets/icons/edit.svg';
import MainPageTemplate from 'templates/MainPageTemplate';
import { ticketsColumns } from 'utils/columns';
import TableAntd from 'components/molecules/Table/Table';
import { Header } from 'components/atoms/Header/Header';
import { StyledLink } from 'components/atoms/Link/Link';
import { Span } from 'components/atoms/Span/Span';
import { Button } from 'components/atoms/Button/Button';
import { ButtonIcon } from 'components/atoms/ButtonIcon/ButtonIcon';
import Alert from 'components/molecules/Alert/Alert';
import Modal from 'components/molecules/Modal/Modal';
import * as S from './StyledDetailsProjectPage';

const DetailsProjectPage = ({match}) => {
    const dispatch = useDispatch()
    const {theme} = useContext(ThemeContext)
    const [projectData, setProjectData] = useState({id: '', name: '', desc: ''})
    const [ticketData, setTicketData] = useState([{id: '', title: '', description: '', status: '', priority: ''}])
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setSuccess] = useState(false)
    const [modalVisible, setModalVisibility] = useState(false)

    useEffect( async () => {
        try {
            const response = await axios.get(`${projectsApi}/${parseInt(match.params.id,10)}`, {withCredentials: true})
            const { project } = response.data
            
            setProjectData(project)
            setTicketData(project.tickets)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)

            if(error.response.status === 400) setMessage('400 (Invalid Token)')
            if(error.response.status === 401) setMessage('401 (Unauthorized)')
            if(error.response.status === 403) setMessage('403 (Forbidden) Not allowed to continue this operation')
            if(error.response.status === 500) setMessage(`500 (Internal Server Error) ${error.response.data }`)
        }
    }, [])

    const showModal = () => {
        setModalVisibility(true)
    }

    const handleCancel = () => {
        setModalVisibility(false)
    }
    
    const handleOk = async () => {  
        const id = parseInt(match.params.id,10)
        const response = await axios.delete(`${projectsApi}/${id}`, {withCredentials: true})
        const { success } = response.data

        if(success) {
            dispatch(actions.deleteProject([id]))
            setSuccess(success)
            setModalVisibility(false)
        }
    }

    return (
        <MainPageTemplate>
            {isSuccess && <Redirect to={routes.projects}/> }
            <Modal 
                title='Delete project'
                txt='Are you sure to delete project?'
                visible={modalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />
            <S.Wrapper>
                <S.Breadcrumb>
                    <StyledLink to={routes.dashboard}>Home</StyledLink>
                    <S.StyledSpan>/</S.StyledSpan>
                    <StyledLink to={routes.projects}>Projects</StyledLink>
                    <S.StyledSpan>/ project {parseInt(match.params.id,10)}</S.StyledSpan>
                </S.Breadcrumb>
                <S.InnerWrapper>
                    <S.ButtonsWrapper>
                        <StyledLink 
                            to={`/user/projects/${match.params.id}/edit`} 
                            button 
                            background={theme.primary}
                            color={theme.colors.white}
                        >
                            <ButtonIcon src={editIcon} />
                            Edit project
                        </StyledLink>
                        <Button 
                            fancy 
                            background={theme.colors.white} 
                            onClick={showModal}
                        >
                            <ButtonIcon src={binIcon} />
                            Delete
                        </Button>
                        <StyledLink 
                            to={`/user/projects/${match.params.id}/tickets/new`}
                            button 
                            background={theme.primary}
                            color={theme.colors.white}
                        >
                            <ButtonIcon src={newIcon} />
                            New ticket
                        </StyledLink>
                    </S.ButtonsWrapper>
                    <Header>
                        Details
                    </Header>
                    {message && <Alert type="error" txt={message} />}
                    <S.DetailsWrapper>
                        <S.DetailsRow>
                            <S.StyledStrong>Project name: </S.StyledStrong>
                            <Span>{projectData.name}</Span>
                        </S.DetailsRow>
                        <S.DetailsRow>
                            <S.StyledStrong>Project description: </S.StyledStrong>
                            <Span>{projectData.description}</Span>
                        </S.DetailsRow>
                    </S.DetailsWrapper>
                    <Header>
                        Tickets
                    </Header>
                    <TableAntd 
                        data={ticketData} 
                        columns={ticketsColumns}
                        isLoading={isLoading}    
                    />
                </S.InnerWrapper>
            </S.Wrapper>
        </MainPageTemplate>
    );
}

DetailsProjectPage.propTypes = {
    match: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
  
export default DetailsProjectPage;