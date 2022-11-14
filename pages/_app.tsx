import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";

import Layout from "../components/layout";

import "../styles/global.css";
import "../public/prism.css";
import "../public/prism.js";

const components = {};

function Application({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}

export default Application;
