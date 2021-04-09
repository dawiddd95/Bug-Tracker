import jwt_decode from "jwt-decode"

export const hasRoleSubmitter = (req, res, next) => {
    const {token} = req.cookies;

    var decoded = jwt_decode(token);

    if(decoded.type === 'Submitter') {
        next();
    } else {
        res.status(403).send('Not allowed');
    }
 }
 
 export const hasRoleAdmin = (req, res, next) => {
    const {token} = req.cookies;

    var decoded = jwt_decode(token);

    if(decoded.type === 'Admin') {
        next();
    } else {
        res.status(403).send('Not allowed');
    }
 }
 
 export const hasRoleProjectLeader = (req, res, next) => {
    const {token} = req.cookies;

    var decoded = jwt_decode(token);

    if(decoded.type === 'ProjectLeader') {
        next();
    } else {
        res.status(403).send('Not allowed');
    }
}