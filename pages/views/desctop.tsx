import React from "react";
import { Navbar } from "../../exteras/components/Navbar";
import { Hero } from "../../exteras/components/desktop/Hero";
import { InsuranceCompanies } from "../../exteras/components/desktop/InsuranceCompanies";
import { OnlineServices } from "../../exteras/components/desktop/OnlineServices";
import { Blog } from "../../exteras/components/desktop/Blog";
import { Comments } from "../../exteras/components/desktop/Comments";
import { Companies } from "../../exteras/components/desktop/Companies";
import { Footer } from "../../exteras/components/desktop/Footer";

const desctop = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <InsuranceCompanies />
      {/* Not responsive  */}
      <OnlineServices />
      <Blog />
      <Comments />
      <Companies />
      <Footer />
    </>
  );
};

export default desctop;
