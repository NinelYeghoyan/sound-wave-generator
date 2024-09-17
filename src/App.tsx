import { FC, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import Loader from '@components/Loader';
import Layout from '@layout/index';
import GlobalStyles from '@style/theme/global.styled';
import theme from '@style/theme/theme';

import '@style/scss/styles.scss';

const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Reset />
            <GlobalStyles />

            <Suspense fallback={<Loader />}>
                <Layout />
            </Suspense>
        </ThemeProvider>
    );
};

export default App;
