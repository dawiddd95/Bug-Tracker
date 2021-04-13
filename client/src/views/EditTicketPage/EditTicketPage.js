import React, { useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { routes } from 'routes/index';
import actions from 'app/tickets/actions';
import MainPageTemplate from 'templates/MainPageTemplate';
import { ticketsApi } from 'utils/api';
import { Header } from 'components/atoms/Header/Header';
import { StyledLink } from 'components/atoms/Link/Link';
import TicketForm from 'components/molecules/TicketForm/TicketForm';
import * as S from './StyledEditTicketPage';

const EditTicketPage = ({match}) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [ticketData, setTicketData] = useState({id: '', title: '', description: '', priority: 'low'})

    useEffect( async () => {
        const fetchData = async () => {
            const response = await axios.get(`${ticketsApi}/${parseInt(match.params.ticketId,10)}`, {withCredentials: true})
            const { ticket } = response.data;

            setTicketData(ticket);
        }
        fetchData()
    }, [])

    const handleOnSubmit = async values => {
        setIsLoading(true);

        const response = await axios.patch(`${ticketsApi}/${ticketData.id}/edit`, values);
        const {data} = response

        
        if(data) dispatch(actions.editTicket(data.ticket))
        
        setIsLoading(false);
        setRedirect(true);
    }


    return (
        <MainPageTemplate>
            <S.Wrapper>
                <S.Breadcrumb>
                    <StyledLink to={routes.dashboard}>Home</StyledLink>
                    <S.StyledSpan>/</S.StyledSpan>
                    <StyledLink to={routes.projects}>Projects</StyledLink>
                    <S.StyledSpan>/</S.StyledSpan>
                    <StyledLink to={`/user/projects/${parseInt(match.params.id,10)}`}>project {parseInt(match.params.id,10)}</StyledLink>
                    <S.StyledSpan>/ ticket {match.params.ticketId}</S.StyledSpan>
                    <S.StyledSpan>/ Edit</S.StyledSpan>
                </S.Breadcrumb>
                <S.InnerWrapper>
                    <Header>
                        Edit Ticket
                    </Header>
                    <S.FormWrapper>
                        <TicketForm 
                            loading={isLoading}
                            projectId={match.params.id} 
                            redirect={redirect}
                            edit
                            ticket={ticketData}
                            handleOnSubmit={handleOnSubmit}
                        />
                    </S.FormWrapper>
                </S.InnerWrapper>
            </S.Wrapper>
        </MainPageTemplate>
    );
}

EditTicketPage.propTypes = {
    match: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default EditTicketPage;