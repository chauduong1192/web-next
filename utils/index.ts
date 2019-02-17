const isServer = () => Object.prototype.toString.call(global.process) === '[object process]';

interface ILocationProps {
  fullUrl: string;
  origin: string;
}

const getLocation = (req: any) => req && req ? {
  // https://stackoverflow.com/a/10185427
  fullUrl: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
  origin: `${req.protocol}://${req.get('host')}`,
} : undefined;

export {
  isServer,
  ILocationProps,
  getLocation,
};
