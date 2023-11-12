import "../style/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-modal/styles.css";
import { HydrationProvider, Client } from "react-hydration-provider";
import { DataProvider } from "../stores/GlobalState";
export default function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <HydrationProvider>
        <Client>
          <Component {...pageProps} />
        </Client>
      </HydrationProvider>
    </DataProvider>
  );
}
