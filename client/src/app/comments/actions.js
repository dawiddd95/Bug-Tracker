import types from './types';

const addFetchedComments = item => ({
   type: types.FETCH_COMMENTS, item
})

const addComment = item => ({
   type: types.ADD_COMMENT, item
})

const editComment = item => ({
   type: types.EDIT_COMMENT, item
})

const deleteComment = item => ({
   type: types.DELETE_COMMENT, item
})

export default {
   addFetchedComments,
   addComment,
   editComment,
   deleteComment
}
