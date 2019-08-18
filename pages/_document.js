import React from 'react';
// import ReactDOMServer from 'react-dom/server';

import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';

import theme from '../constants/theme';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <style>
            {`     
            @keyframes blinker {
                100% {
                  opacity: 0;
                }
              }    
            .Cursor {
              animation: blinker 0.4s ease-out infinite;
            }
            `}
          </style>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body
          className="body"
          style={{
            overflow: 'auto',
            margin: '0px',
            width: '100vw',
            top: 0,
            position: 'absolute',
            'background-color': '#000000',
          }}
        >
          <div className="root">
            <Main />
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;
  // ReactDOMServer.renderToString(sheets.collect(<App />));
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });
  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: [
      <>
        {initialProps.styles}
        {sheets.getStyleElement()}
      </>,
    ],
  };
};

export default MyDocument;
