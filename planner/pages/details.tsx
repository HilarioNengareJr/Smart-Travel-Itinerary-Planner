import React from 'react';
import Layout from '@/components/layout';
import Head from 'next/head';
import TripDetails from '@/components/tripDetails';

const Details: React.FC = () => {
    return (
        <>
            <Head>
                <title>Smart Travel-Details</title>
            </Head>
            <Layout>
                <TripDetails />
            </Layout>
        </>
    );
}

export default Details;