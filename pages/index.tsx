import Layout from '../components/layout';
import routes from '../routes';

export default function Home() {
  return (
    <Layout activeRoute={routes.theory.index}>
      <h3>Content.</h3>
    </Layout>
  );
}
