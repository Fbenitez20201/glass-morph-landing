import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import React from "react";
import NotFound from "./NotFound";
import Navbar from "@/components/Navbar";

export const NotFoundPage = () => {
  return (
    <div>
      <div className="overflow-hidden">
        <Navbar />
        <NotFound />
      </div>
      <FAQ />
      <Footer />
    </div>
  );
};
