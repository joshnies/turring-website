import { Grid } from '@geist-ui/react';

import Layout from '../components/layout';
import routes from '../routes';

export default function Home() {
  return (
    <Layout activeRoute={routes.theory.index}>
      <Grid.Container gap={2} justify="center">
        <h1>Introducing Turring.</h1>
      </Grid.Container>
    </Layout>
  );
}
