import React from 'react';
import Layout from '@/components/layout';
import Head from 'next/head';
import Calendar from '@/components/calendar';

const Dates: React.FC = () => {
    return (
        <>
            <Head>
                <title>Smart Travel-Calendar</title>
            </Head>
            <Layout>
                <Calendar />
            </Layout>
        </>
    );
}

export default Dates;