import React from 'react';
import { routes } from 'routes/index';
import errorImg from '../../assets/img/404.png'
import * as S from './StyledErrorPage';

const ErrorPage = () => {
    return (  
        <S.Wrapper>
            <S.Img src={errorImg} />
            <S.TextWrapper>
                <S.StyledHeader color="#434E59" big>
                    404
                </S.StyledHeader>
                <S.StyledSpan>
                    Sorry, the page you visited does not exist
                </S.StyledSpan>
                <S.Link to={routes.home} color>Back to home</S.Link>
            </S.TextWrapper>
        </S.Wrapper>
    );
}
 
export default ErrorPage;