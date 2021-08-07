import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Registre from "../pages/Registre";
import Routes from "../routes";

function Layout() {
  return (
    <>
      {true ? (
        <div>
          <Header />
          <Routes />
          <Footer />
        </div>
      ) : (
        <div>
			<Registre />
		</div>
      )}
    </>
  );
}

export default Layout;
