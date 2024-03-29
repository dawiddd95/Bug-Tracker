import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { routes } from 'routes/index';
import MainPageTemplate from 'templates/MainPageTemplate';
import { ticketsApi } from 'utils/api';
import actions from 'app/tickets/actions'
import { Header } from 'components/atoms/Header/Header';
import { StyledLink } from 'components/atoms/Link/Link';
import TicketForm from 'components/molecules/TicketForm/TicketForm';
import * as S from './StyledNewTicketPage';

const NewTicketPage = ({match}) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const handleOnSubmit = async values => {
        setIsLoading(true);

        const response = await axios.post(ticketsApi, values);
        const {data} = response
        
        if(data) dispatch(actions.addTicket(data.ticket))
        
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
                    <S.StyledSpan>/ New ticket</S.StyledSpan>
                </S.Breadcrumb>
                <S.InnerWrapper>
                    <Header>
                        New Ticket
                    </Header>
                    <S.FormWrapper>
                        <TicketForm 
                            loading={isLoading}
                            projectId={match.params.id} 
                            redirect={redirect}
                            handleOnSubmit={handleOnSubmit}
                        />
                    </S.FormWrapper>
                </S.InnerWrapper>
            </S.Wrapper>
        </MainPageTemplate>
    );
}

NewTicketPage.propTypes = {
    match: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default NewTicketPage;