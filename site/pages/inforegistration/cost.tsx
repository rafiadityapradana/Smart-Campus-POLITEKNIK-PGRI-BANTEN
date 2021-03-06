import React from "react";
import Head from "next/head";
import HeadersInfo from "../../Components/HeadersInfo";

import Homecost from "../../Components/Homecost";

export default function cost() {
  return (
    <>
      <Head>
        <title>COST | POLITEKNIK PGRI BANTEN</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeadersInfo />

      <Homecost />
    </>
  );
}
