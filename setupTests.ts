import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Configure Enzyme with React 16 adapter
Enzyme.configure({ adapter: new Adapter() });

jest.mock('next/config', () => () => ({
  serverRuntimeConfig: {
    isProd: false,
    apiKey: 'XXXXX',
    apiUrl: 'web-next.xyz.com',
  },
  publicRuntimeConfig: {
    name: 'web-next',
    description: 'test desc',
    keywords: 'aaaa',
    themeColor: '',
    gtmCode: '',
    websiteUrl: '',
  },
}));
