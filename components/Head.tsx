import React from 'react';
import NextHead from 'next/head';

import { name, description, keywords } from '@utils/config';

interface IHeadProps {
  title?: string;
  desc?: string;
  keyws?: string;
}

const defaultTitle = name;
const defaultDescription = description;
const defaultKeywords = keywords;

const Head = ({
  title = defaultTitle,
  desc = defaultDescription,
  keyws = defaultKeywords,
}: IHeadProps) => (
    <NextHead>
      <title key="title">{title}</title>
      <meta name="description" content={desc} key="description" />
      {keywords && <meta name="keywords" content={keyws} key="keywords" />}
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=2" />
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:description" content={description} key="og:desc" />
    </NextHead>
  );

export default Head;
