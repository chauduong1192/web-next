import { Fragment } from 'react';
import Document, { Head, Main, NextScript, DocumentProps } from 'next/document';
import getConfig from 'next/config';

import { ILocationProps } from '@app/utils';
import styles from './_style';

const ASSET_PATH = '_next/static';
const getFullAssetPath = (assetPrefix: string = '') => `${assetPrefix}/${ASSET_PATH}`;

const { publicRuntimeConfig } = getConfig();

interface IMyDocumentProps extends DocumentProps {
  location: ILocationProps;
}

class MyDocument extends Document<IMyDocumentProps> {
  public static getInitialProps = async (ctx) => {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // location: getLocation(req),
    };
  }

  // https://github.com/joshbuchea/HEAD#facebook-open-graph
  // Check og:title, og:description tags in @app/components/Head component
  public renderOGTags() {
    const { assetPrefix, location } = this.props;
    const fullAssetPath = getFullAssetPath(assetPrefix || location.origin);

    return <Fragment>
      <meta property="og:site_name" content={publicRuntimeConfig.name} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${fullAssetPath}/images/logo.png`} />
      <meta property="og:url" content={location.fullUrl} />
    </Fragment>;
  }

  // https://github.com/gokulkrishh/awesome-meta-and-manifest
  public renderPwaTags() {
    const { dev, assetPrefix } = this.props;
    const fullAssetPath = getFullAssetPath(assetPrefix);

    return <Fragment>
      {/* PWA Manifest */}
      {!dev && <link rel="manifest" href={`${fullAssetPath}/manifest.json`} />}

      {/* iOS */}
      <meta name="apple-mobile-web-app-title" content={publicRuntimeConfig.name} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />

      {/* Android */}
      <meta name="theme-color" content={publicRuntimeConfig.themeColor} />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Pinned Sites */}
      <meta name="application-name" content={publicRuntimeConfig.name} />

      {/* UC Mobile Browser */}
      <meta name="full-screen" content="yes" />
      <meta name="browsermode" content="application" />

      {/* Others */}
      <meta name="layoutmode" content="fitscreen" />
      <meta name="imagemode" content="force" />
      <meta name="screen-orientation" content="portrait" />
    </Fragment>;
  }

  // https://github.com/gokulkrishh/awesome-meta-and-manifest#link-tags
  public renderIconTags() {
    const { dev, assetPrefix } = this.props;
    const fullAssetPath = getFullAssetPath(assetPrefix);

    if (dev) {
      return <link
        rel="shortcut icon"
        href={`${fullAssetPath}/icons/favicon.ico`}
      />;
    }

    return <Fragment>
      {/* Main Link Tags */}
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${fullAssetPath}/icons/icon_16x16.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${fullAssetPath}/icons/icon_32x32.png`}
      />

      {/* iOS */}
      <link
        rel="apple-touch-icon"
        href={`${fullAssetPath}/icons/icon_180x180.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`${fullAssetPath}/icons/icon_76x76.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={`${fullAssetPath}/icons/icon_120x120.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={`${fullAssetPath}/icons/icon_152x152.png`}
      />

      {/* Startup Image */}
      <link
        rel="apple-touch-startup-image"
        sizes="1024x1024"
        href={`${fullAssetPath}/icons/icon_1024x1024.png`}
      />

      {/* Pinned Tab */}
      <link
        rel="mask-icon"
        href={`${fullAssetPath}/icons/safari-pinned-tab.svg`}
        color="5bbad5"
      />

      {/* Android */}
      <link
        rel="icon"
        sizes="192x192"
        href={`${fullAssetPath}/icons/icon_192x192.png`}
      />
      <link
        rel="icon"
        sizes="194x194"
        href={`${fullAssetPath}/icons/icon_194x194.png`}
      />

      {/* UC Browser */}
      <link
        rel="apple-touch-icon-precomposed"
        sizes="57x57"
        href={`${fullAssetPath}/icons/icon_57x57.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href={`${fullAssetPath}/icons/icon_72x72.png`}
      />
    </Fragment>;
  }

  public renderOtherTags() {
    const { location } = this.props;

    return <Fragment>
      <link rel="canonical" href={location.fullUrl} />
      <meta name="HandheldFriendly" content="True" />
      <meta name="google" content="notranslate" />
      <meta name="format-detection" content="telephone=no" />
    </Fragment>;
  }

  public renderGTM(noscript: boolean = false) {
    const { dev } = this.props;

    if (dev) {
      return null;
    }

    if (noscript) {
      return <noscript dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM_CODE"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}></noscript>;
    }

    return <script dangerouslySetInnerHTML={{
      __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.defer=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${publicRuntimeConfig.gtmCode}');`,
    }}></script>;
  }

  public render() {
    const { __NEXT_DATA__: { props } } = this.props;
    return (
      <html lang={props.initialLanguage}>
        <Head>
          <base href="/" />

          <meta charSet="utf-8" />
          <meta httpEquiv="Content-type" content="text/html;charset=UTF-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=2" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

          {/* OG */}
          {/* {this.renderOGTags()} */}

          {/* iOS & Android */}
          {this.renderPwaTags()}

          {/* Icons */}
          {this.renderIconTags()}

          {/* Other Tags */}
          {/* {this.renderOtherTags()} */}

          {/* GTM */}
          {/* {this.renderGTM()} */}

        </Head>

        <body>
          {/* {this.renderGTM(true)} */}

          <Main />

          <NextScript />

          <style jsx global>{styles}</style>
        </body>
      </html>
    );
  }
}

export default MyDocument;
