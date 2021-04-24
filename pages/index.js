import { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SpeakOut from '../components/Banners/SpeakOut';
import SubmitAName from '../components/Banners/SubmitAName';
import Divider from '../components/Divider';
import RulingCard from '../components/RulingCard';

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <div className="max-centered">
        <SpeakOut />
        <main
          role="main"
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            overflowX: 'scroll',
          }}
        >
          <RulingCard />
          <RulingCard />
          <RulingCard />
          <RulingCard />
          <RulingCard />
          <RulingCard />
          <RulingCard />
          <RulingCard />
          <RulingCard />
        </main>
        <SubmitAName />
        <Divider />
        <Footer />
      </div>
    </Fragment>
  );
}
