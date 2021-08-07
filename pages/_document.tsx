import { CssBaseline } from '@geist-ui/react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = CssBaseline.flush();
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styles}
        </>
      ),
    };
  }

  render() {
    return (
      <Html
        lang="en"
        css={{
          height: '100%',
        }}
      >
        <Head />
        <body
          css={{
            height: '100%',
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
