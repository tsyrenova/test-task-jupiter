import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@/components/layout';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Test Task Jupiter</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout />
        </>
    );
};

export default Home;
