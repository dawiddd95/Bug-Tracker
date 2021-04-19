import React from 'react';
import { useSelector } from 'react-redux';
import Comment from 'components/molecules/Comment/Comment';
import * as S from './StyledCommentsList';

const CommentsList = () => {
    const {comments} = useSelector(state => state.comments)

    return (
        <S.Wrapper>
            {comments !== undefined ? comments.map(el => <Comment comment={el} />) : ''}
        </S.Wrapper>
    );
};

export default CommentsList;
