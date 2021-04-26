import { RulingsProvider } from '../context/RulingsContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <RulingsProvider>
      <Component {...pageProps} />
    </RulingsProvider>
  );
}

export default MyApp;
