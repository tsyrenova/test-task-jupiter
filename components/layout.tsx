import React from 'react';
import Header from '@/components/header';
import Main from '@/components/main';
import styles from './layout.module.scss';

const Layout: React.FC = () => (
    <div className={styles.container}>
        <Header />
        <Main />
    </div>
    //  <div className={styles.container}>
    //      <Header />
    //      <Sidebar />
    //      <Main />
    // </div>
);

export default Layout;
