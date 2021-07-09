import React from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import './../../styles/components/Layout.sass';
function Layout({ children }) {
  return (
    <div className="body Main">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
