import { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SpeakOut from '../components/Banners/SpeakOut';
import SubmitAName from '../components/Banners/SubmitAName';
import Divider from '../components/Divider';
import Rulings from '../containers/Rulings';

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <div className="max-centered">
        <SpeakOut />
        <Rulings />
        <SubmitAName />
        <Divider />
        <Footer />
      </div>
    </Fragment>
  );
}
