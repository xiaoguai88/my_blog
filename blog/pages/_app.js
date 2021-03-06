import App from 'next/app'
import 'antd/dist/antd.css'
import '../styles/pages/common.css';

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }