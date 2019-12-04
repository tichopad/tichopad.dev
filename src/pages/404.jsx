import React from 'react';
import Body from 'components/Body';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Link } from 'gatsby';

export default function PageNotFound() {
  return (
    <>
      <Header />
      <Body>
        <h4>
          <Link to="/">
            ←tichopad<small>.dev</small>
          </Link>
        </h4>
        <h2>Tato stránka neexistuje</h2>
        <p>Nezabloudili jste?</p>
      </Body>
      <Footer />
    </>
  );
}
