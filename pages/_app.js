import { Toaster } from 'react-hot-toast';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

const MyApp = ({ Component, pageProps }) => (
  <StateContext>
    <Layout>
      <Toaster />
      <Component {...pageProps} />
    </Layout>
  </StateContext>

);

export default MyApp;
