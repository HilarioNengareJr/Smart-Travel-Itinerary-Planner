import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout';

const Index: React.FC = () => {
    return (
        <>
            <Head>
                <title>Smart Travel</title>
            </Head>
            <Layout>
                <div className='pt-36 grid grid-rows-2 gap-4 items-center justify-items-center relative'>
                    <label htmlFor='location' className='text-3xl font-medium'>
                        Where do you want to go?
                    </label>
                    <div className='relative w-2/5'>
                        <input 
                            type='text' 
                            id='location' 
                            name='location' 
                            placeholder='Search by country, city or town ...'
                            className='p-3 text-lg w-full border border-gray-200 border-2 outline-blue-200 rounded-2xl pl-10 pr-10' 
                            required 
                        />
                        <span className='material-symbols-outlined absolute inset-y-1/3 left-3 pr-flex items-center'>
                            search
                        </span>
                        <span className='material-symbols-outlined absolute inset-y-1/3 right-3 flex items-center'>
                            mic
                        </span>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Index;
