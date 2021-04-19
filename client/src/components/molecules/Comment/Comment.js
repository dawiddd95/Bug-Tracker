import React from 'react';
import PropTypes from 'prop-types';
import { Span } from 'components/atoms/Span/Span';
import * as S from './StyledComment';

const Comment = ({comment}) => {
    return (
        <S.Wrapper>
            <S.HeaderWrapper>
                <Span>
                    {comment.author.name} 
                    {comment.author.surname}
                </Span>
            </S.HeaderWrapper>
            <S.BodyWrapper>
                <Span>
                    {comment.content}
                </Span>
            </S.BodyWrapper>
        </S.Wrapper>
    );
};

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.number,
        content: PropTypes.string,
        author: PropTypes.shape({
            name: PropTypes.string,
            surname: PropTypes.string,
        })
    })
};

Comment.defaultProps = {
    comment: {
        id: '',
        content: '',
        author: {
            name: '',
            surname: '',
        }
    }
}

export default Comment;
