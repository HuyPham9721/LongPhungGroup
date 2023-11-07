import "../style/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-modal/styles.css";
import { HydrationProvider, Client } from "react-hydration-provider";
export default function MyApp({ Component, pageProps }) {
  return (
    <HydrationProvider>
      <Client>
        <Component {...pageProps} />
      </Client>
    </HydrationProvider>
  );
}
