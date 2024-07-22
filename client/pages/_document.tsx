// pages/_document.tsx
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel='icon' href='/favicon.png' type='image/png' />
                    <meta name='description' content='Plan your trips efficiently with our smart itinerary planner.' />
                    <meta property='og:title' content='Smart Travel Itinerary Planner' />
                    <meta property='og:description' content='Plan your trips efficiently with our smart itinerary planner.' />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
                    
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
