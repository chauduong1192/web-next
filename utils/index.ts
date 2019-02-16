const isServer = () => Object.prototype.toString.call(global.process) === '[object process]';

interface ILocationProps {
  fullUrl: string;
  origin: string;
}

const getLocation = (ctx: any): ILocationProps => ctx && ctx.req ? {
  // https://stackoverflow.com/a/10185427
  fullUrl: `${ctx.req.protocol}://${ctx.req.get('host')}${ctx.req.originalUrl}`,
  origin: `${ctx.req.protocol}://${ctx.req.get('host')}`,
} : undefined;

export {
  isServer,
  ILocationProps,
  getLocation,
};
