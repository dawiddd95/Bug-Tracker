import models from '../db/models'

export const isAssign = async (req, res, next) => {
    const {token} = req.cookies;

    var decoded = jwt_decode(token);

    const user = await models.User.findOne({ 
        where: {
            id: userId
        }
    })
 
    if(decoded.id === user.projectId) {
        next();
    } else {
        res.status(403).send('Not allowed');
    }
}

export const isTicketAuthor = async (req, res, next) => {
    const body = req.body

    // args.submitterId to chyba, że w body jest wysyłane id submittera
    if(args.submitterId === userId) {
       skip
    } else {
       throw new Error('Only Ticket author is allowed to made this operation');
    }
}

export const isCommentAuthor = async (req, res, next) => {
    const comment = await models.Comment.findOne({ where: {id: args.id} })
 
    if(comment.authorId === userId) {
       skip
    } else {
       throw new Error('Only Comment author is allowed to made this operation');
    }
}