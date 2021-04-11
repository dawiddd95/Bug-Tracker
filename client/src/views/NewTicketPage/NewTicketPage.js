import React from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';
import { routes } from 'routes/index';
import MainPageTemplate from 'templates/MainPageTemplate';
// import { userApi } from 'utils/api';
import { Header } from 'components/atoms/Header/Header';
import { StyledLink } from 'components/atoms/Link/Link';
import NewTicketForm from 'components/molecules/NewTicketForm/NewTicketForm';
import * as S from './StyledNewTicketPage';

const NewTicketPage = ({match}) => {
    // const [userData, setUserData] = useState([{id: '', name: '', surname: ''}]);

    // useEffect( async () => {
    //     const response = await axios.get(userApi, {withCredentials: true})
    //     const { data } = response.data;

    //     console.log(data)

    //     setUserData(data);
    //  }, [])


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
                       <NewTicketForm project={match.params.id} />
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