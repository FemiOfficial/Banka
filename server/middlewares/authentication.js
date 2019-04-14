import statusCodes from '../helpers/statusCodes';
import TokenOperations from '../helpers/tokenOperations';

const Authentication = {
  verifyToken(req, res, next) {
    const authToken = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.Authorization || req.headers.authorization;
    if (authToken) {
      const token = authToken.split(' ')[1];
      if (!token) {
        return res.status(statusCodes.forbidden).json({ error: 'No token provided' });
      }

      const user = TokenOperations.verify(token);
      if (!user) {
        return res.status(statusCodes.unAuthorized).json({ error: 'Invalid token provided' });
      }
      req.user = user;
      return next();
    }
    return res.status(statusCodes.unAuthorized).json({ error: 'No token provided' });
  },
};

export default Authentication;
