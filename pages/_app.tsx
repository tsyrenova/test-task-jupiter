import 'normalize.css/normalize.css';
import '/styles/fonts.scss';
import 'styles/globals.scss';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
