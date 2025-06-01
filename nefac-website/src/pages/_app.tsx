import type { AppProps } from 'next/app';
import Header from '../components/header';
import Footer from '../components/footer';
import '../globals.css';
import { useRouter } from "next/router";
import { FaustProvider } from "@faustwp/core";
import { WordPressBlocksProvider, fromThemeJson } from "@faustwp/blocks";
import blocks from "../../wp-blocks";
import "../../faust.config";

// this was included in the documentation, but installing dependencies doesn't produce it?
// import "@/styles/blocks.scss";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
      <FaustProvider pageProps={pageProps}>
        <WordPressBlocksProvider
            config={{
                blocks,
            }}
        >
            <Header />
            <Component {...pageProps} key={router.asPath} />
            <Footer />
        </WordPressBlocksProvider>
      </FaustProvider>
    )
  }