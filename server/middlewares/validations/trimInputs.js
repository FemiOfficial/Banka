/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const trimInput = (req, res, next) => {
  for (const index in req.body) {
    req.body[index] = typeof req.body[index] === 'string'
      ? req.body[index].trim() : req.body[index];
  }
 return next();
};

export default trimInput;
