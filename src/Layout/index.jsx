import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Login from '../pages/Login'
import Routes from "../routes";

function Layout() {
  return (
    <>
      {false ? (
        <div>
          <Header />
          <Routes />
          <Footer />
        </div>
      ) : (
        <div>
			<Login />
		</div>
      )}
    </>
  );
}

export default Layout;
