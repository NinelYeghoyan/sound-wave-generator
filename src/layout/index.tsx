import { FC, lazy } from 'react';

import StyledLayout from '@layout/styled';

const Header = lazy(() => import('@layout/Header'));
const Main = lazy(() => import('@layout/Main'));
const Footer = lazy(() => import('@layout/Footer'));

const Layout: FC = () => {
    return (
        <StyledLayout className="SG-layout">
            <Header />

            <Main />

            <Footer />
        </StyledLayout>
    );
};

export default Layout;
