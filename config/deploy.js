module.exports = function(deployTarget) {
  return {
    pagefront: {
      app: 'flip-the-tomster',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
