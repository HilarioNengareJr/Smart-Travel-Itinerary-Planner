import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/layout';
import InputComponent from '@/components/input';
import Hero from '@/components/hero';

const Index: React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (value: string) => {
        setInputValue(value);
    };

    return (
        <>
            <Head>
                <title>Smart Travel</title>
            </Head>
            <Layout inputValue={inputValue}>
                <InputComponent value={inputValue} onChange={handleInputChange} />
                <Hero />
            </Layout>
        </>
    );
}

export default Index;
