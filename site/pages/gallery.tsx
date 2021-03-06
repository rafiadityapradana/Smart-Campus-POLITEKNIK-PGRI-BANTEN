import React from "react";
import HomeGallery from "../Components/HomeGallery";
import HeadersInfo from "../Components/HeadersInfo";
import Head from "next/head";
import Footers from "../Components/Footers";
import Headers from "../Components/Headers";

export default function gallery() {
  return (
    <>
      <Head>
        <title>GALLERY | POLITEKNIK PGRI BANTEN</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeadersInfo />
      <Headers />

      <HomeGallery />
      <Footers />
    </>
  );
}
