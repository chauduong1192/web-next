import NextHead from 'next/head';
import getConfig from 'next/config';

interface IHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const { publicRuntimeConfig } = getConfig();
const defaultTitle = publicRuntimeConfig.name;
const defaultDescription = publicRuntimeConfig.description;
const defaultKeywords = publicRuntimeConfig.keywords;

const Head = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
}: IHeadProps) => (
    <NextHead>
      <title key="title">{title}</title>
      <meta name="description" content={description} key="description" />
      {keywords && <meta name="keywords" content={keywords} key="keywords" />}

      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:description" content={description} key="og:desc" />
    </NextHead>
  );

export default Head;
