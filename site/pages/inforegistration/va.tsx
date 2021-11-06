import React from "react";

import HeadersInfo from "../../Components/HeadersInfo";

import Head from "next/head";

import HomeVa from "../../Components/HomeVa";

export default function va() {
  return (
    <>
      <Head>
        <title>VA NUMBER | POLITEKNIK PGRI BANTEN</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeadersInfo />
      <HomeVa />
    </>
  );
}