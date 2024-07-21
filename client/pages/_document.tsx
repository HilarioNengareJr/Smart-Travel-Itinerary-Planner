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
                    <link
                        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:wght@400;500;600;700&display=swap"
                        rel="stylesheet"
                    />
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
