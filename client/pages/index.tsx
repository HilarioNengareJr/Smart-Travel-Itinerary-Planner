import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout';

const Index = () => {
    return (
        <>
            <Head>
                <title>Smart Travel</title>
            </Head>
            <Layout>
                <div className='pt-36 grid grid-rows-2 gap-4 items-center justify-items-center'>
                    <label htmlFor='location' className='text-3xl font-medium'>
                        Where do you want to go?
                    </label>
                    <input type='text' id='location' name='location' className='p-2 border border-gray-200 border-2 outline-blue-200 rounded-2xl w-2/5' required />
                </div>

            </Layout>
        </>
    );
}

export default Index;
