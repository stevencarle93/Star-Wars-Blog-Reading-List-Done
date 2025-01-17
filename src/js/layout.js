import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  //<Navbar />
  /*<Link to={`/films/${film.uid}`} className="">
  <img
	src={`https://starwars-visualguide.com/assets/img/films/${film.uid}.jpg`}
	className="card-img-top"
	alt="..."
  />
</Link>*/
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
