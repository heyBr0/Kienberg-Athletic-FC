/* import '@/styles/globals.css' */
import "../styles/globals.css";
import Layout from "@/components/Layout";
import {SSRProvider} from '@react-aria/ssr'; 

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}
