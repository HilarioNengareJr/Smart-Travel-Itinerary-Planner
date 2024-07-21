import '../styles/style.css';
import '../styles/output.css';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Component {...pageProps} />
    );
}

export default App;