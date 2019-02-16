const isDev = () => ['staging', 'production'].indexOf(process.env.NODE_ENV) === -1;

export {
  isDev,
};
