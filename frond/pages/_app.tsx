import { withUrqlClient } from "next-urql";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { CreateUrqlClient } from "../src/utils/CreateUrqlClient";
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default withUrqlClient(CreateUrqlClient, { ssr: true })(MyApp);
