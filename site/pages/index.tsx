import Head from "next/head";

import HeadersInfo from "../Components/HeadersInfo";
import HeroHome from "../Components/HeroHome";
import Headers from "../Components/Headers";
import Footers from "../Components/Footers";
import HomeWelcome from "../Components/HomeWelcome";
export default function Home() {
  return (
    <>
      <Head>
        <title>POLITEKNIK PGRI BANTEN</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeadersInfo />
      <Headers />
      <HeroHome />
      <HomeWelcome />
      <Footers />
    </>
  );
}
