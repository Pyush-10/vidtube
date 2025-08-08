// classic high order function which takes function as a parameter and return fucntion as a parameter
// just rember this code  common practise

const asynchandler = (requesthandler) => {
  return (req, res, next) => {
    Promise.resolve(requesthandler(req, res, next)).catch((err) => next(err));
  };
};
export { asynchandler };
