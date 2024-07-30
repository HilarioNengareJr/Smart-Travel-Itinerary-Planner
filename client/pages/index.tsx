import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout';
import InputComponent from '@/components/input';
import Hero from '@/components/hero';

const Index: React.FC = () => {
    return (
        <>
            <Head>
                <title>Smart Travel</title>
            </Head>
            <Layout>
                <InputComponent />
                <Hero />
            </Layout>
        </>
    );
}

export default Index;
