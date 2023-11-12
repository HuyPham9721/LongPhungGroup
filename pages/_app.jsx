import "../style/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-modal/styles.css";
import { HydrationProvider, Client } from "react-hydration-provider";
import { store } from "../store";
import { Provider } from "react-redux";
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <HydrationProvider>
        <Client>
          <Component {...pageProps} />
        </Client>
      </HydrationProvider>
    </Provider>
  );
}
