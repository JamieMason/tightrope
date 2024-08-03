import { HomepageHeader } from '@site/src/components/homepage/header';
import Layout from '@theme/Layout';
import React from 'react';
import HomepageFeatures from '../components/homepage/features';

export default function Home(): JSX.Element {
  return (
    <Layout title="" description="">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
