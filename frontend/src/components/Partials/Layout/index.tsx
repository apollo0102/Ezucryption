import React, { ReactNode } from "react";

import NavBar from "../NavBars";
import Footer from "../Footer/FooterRoot";

function Layout(page: ReactNode) {
  return (
    <div>
      <NavBar />
      {page}
      <Footer />
    </div>
  );
}

export default Layout;
