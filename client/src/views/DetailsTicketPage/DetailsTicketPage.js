import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { theme } from 'theme/mainTheme';
import { routes } from 'routes/index';
import actions from 'app/projects/actions';
import { ticketsApi } from 'utils/api';
import binIcon from 'assets/icons/bin.svg';
import editIcon from 'assets/icons/edit.svg';
import MainPageTemplate from 'templates/MainPageTemplate';
import { Header } from 'components/atoms/Header/Header';
import { StyledLink } from 'components/atoms/Link/Link';
import { Span } from 'components/atoms/Span/Span';
import { Button } from 'components/atoms/Button/Button';
import { ButtonIcon } from 'components/atoms/ButtonIcon/ButtonIcon';
import Modal from 'components/molecules/Modal/Modal';
import * as S from './StyledDetailsTicketPage';

const DetailsTicketPage = ({match}) => {
    const dispatch = useDispatch()
    const [ticketData, setTicketData] = useState([{id: '', title: '', description: '', status: '', priority: ''}])
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setSuccess] = useState(false)
    const [modalVisible, setModalVisibility] = useState(false)

    useEffect( async () => {
        const response = await axios.get(`${ticketsApi}/${parseInt(match.params.ticketId,10)}`, {withCredentials: true})
        const { ticket } = response.data

        console.log(ticket)
        // console.log(ticket.comments)
        // console.log(ticket.comments[0].author.id)

//             {id: 301, title: "Bug with models relations", description: "Ticket model relation hasMany call some bugs", priority: "high", createdAt: "2021-04-12T15:05:08.467Z", …}
// comments: Array(3)
// 0:
// author: {id: 309, name: "Justyna", surname: "Jabłońska", email: "jjablonska@gmail.com", password: "$2b$10$amCO8fbOyfXZtS3vnhs6xOCfAFBMmGJvQtCw.j0kO4niAi/9xZ26e", …}
// authorId: 309
// content: "Something goes wrong?"
// createdAt: "2021-04-12T15:05:08.474Z"
// id: 301
// ticketId: 301
// updatedAt: "2021-04-12T15:05:08.474Z"
// __proto__: Object
// 1: {id: 302, content: "Yes, could you solve this at once?", createdAt: "2021-04-12T15:05:08.474Z", updatedAt: "2021-04-12T15:05:08.474Z", ticketId: 301, …}
// 2: {id: 303, content: "Everything is allright now", createdAt: "2021-04-12T15:05:08.474Z", updatedAt: "2021-04-12T15:05:08.474Z", ticketId: 301, …}
// length: 3
// __proto__: Array(0)
// createdAt: "2021-04-12T15:05:08.467Z"
// description: "Ticket model relation hasMany call some bugs"
// developerId: 302
// id: 301
// priority: "high"
// projectId: 301
// submitterId: 305
// title: "Bug with models relations"
// updatedAt: "2021-04-12T15:05:08.467Z"
            
        setTicketData(ticket)
        setIsLoading(false)
    }, [])

    const showModal = () => {
        setModalVisibility(true)
    }

    const handleCancel = () => {
        setModalVisibility(false)
    }
    
    const handleOk = async () => {  
        const id = parseInt(match.params.id,10)
        const response = await axios.delete(`${ticketsApi}/${id}`, {withCredentials: true})
        const { success } = response.data

        if(success) {
            dispatch(actions.deleteTicket([id]))
            setSuccess(success)
            setModalVisibility(false)
        }
    }

    return (
        <MainPageTemplate>
            {isSuccess && <Redirect to={`/user/projects/${match.params.id}/tickets/${match.params.ticketId}`}/> }
            <Modal 
                title='Delete ticket'
                txt='Are you sure to delete ticket?'
                visible={modalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />
            <S.Wrapper>
                <S.Breadcrumb>
                    <StyledLink to={routes.dashboard}>Home</StyledLink>
                    <S.StyledSpan>/</S.StyledSpan>
                    <StyledLink to={routes.projects}>Projects</StyledLink>
                    <S.StyledSpan>/</S.StyledSpan>
                    <StyledLink to={`${routes.projects}/${parseInt(match.params.id,10)}`}>Project {parseInt(match.params.id,10)}</StyledLink>
                    <S.StyledSpan>/ ticket</S.StyledSpan>
                    <StyledLink 
                        to={`${routes.projects}/${parseInt(match.params.id,10)}/tickets/${match.params.ticketId}`}
                    >
                        {parseInt(match.params.id,10)}
                    </StyledLink>
                </S.Breadcrumb>
                <S.InnerWrapper>
                    <S.ButtonsWrapper>
                        <StyledLink 
                            to={`${routes.projects}/${parseInt(match.params.id,10)}/tickets/${match.params.ticketId}/edit`} 
                            button 
                            background={theme.background.primary}
                        >
                            <ButtonIcon src={editIcon} />
                            Edit ticket
                        </StyledLink>
                        <Button fancy background={theme.background.white} onClick={showModal}>
                            <ButtonIcon src={binIcon} />
                            Delete
                        </Button>
                    </S.ButtonsWrapper>
                    <Header>
                        Details
                    </Header>
                    <S.DetailsWrapper>
                        <S.DetailsRow>
                            <S.StyledStrong>Ticket title: </S.StyledStrong>
                            <Span>{ticketData.title}</Span>
                        </S.DetailsRow>
                        <S.DetailsRow>
                            <S.StyledStrong>Ticket description: </S.StyledStrong>
                            <Span>{ticketData.description}</Span>
                        </S.DetailsRow>
                        <S.DetailsRow>
                            <S.StyledStrong>Ticket priority: </S.StyledStrong>
                            <Span>{ticketData.priority}</Span>
                        </S.DetailsRow>
                    </S.DetailsWrapper>
                    <Header>
                        Comments
                    </Header>
                   {/* Form z jednego inputu do komentarza */}
                   {/* <CommentForm /> */}
                   {/* Lista komentarzy */}
                   {isLoading}
                </S.InnerWrapper>
            </S.Wrapper>
        </MainPageTemplate>
    );
}

DetailsTicketPage.propTypes = {
    match: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
  
export default DetailsTicketPage;