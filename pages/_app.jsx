import "../styles/variables.css";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

/**
 * Defualt _app.jsx file
 */
export default function App({ Component, pageProps }) {
  const { library, config } = require("@fortawesome/fontawesome-svg-core");
  library.add(fas, far, fab);
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
