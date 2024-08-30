import type { AppProps } from 'next/app';
import '../styles/global.css';
import '../styles/output.css';
import { Provider } from 'react-redux';
import { store } from '@/state/store';
import { wrapper } from '@/state/store';


const App = ({ Component, pageProps }: AppProps) => (
    <Provider store={store()}>
        <Component {...pageProps} />
    </Provider>
);

export default wrapper.withRedux(App);
