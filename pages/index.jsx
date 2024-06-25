import Head from "next/head";

import { useTheme, ThemeProvider } from "next-themes";
import Layout from "./Layout";
import utilStyles from "../styles/theme.util.module.css";
import style from "../styles/Home.module.css";
import FaceImage from "../components/FaceImage";
import Button from "../components/Button";
import buttons from "../public/user/Buttons.json";
import userInfo from "../public/user/userInfo.json";

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme();
  var buttonsJSON = JSON.parse(JSON.stringify(buttons));
  var userInfoJSON = JSON.parse(JSON.stringify(userInfo));

  return (
    <Layout home>
      <div>
        <Head>
          <title>{userInfoJSON["website"]}</title>
          <meta name="description" content={userInfoJSON["website"]} />
          <meta name="og:title" content={userInfoJSON["website"]} />
        </Head>
        <section className={style.container}>
          <FaceImage />
          <section className={utilStyles.heading2Xl}>
            {userInfoJSON["name"]}
          </section>

          {buttonsJSON.map((button) => (
            <Button name={button.name} url={button.url} image={button.image} />
          ))}
        </section>
      </div>
    </Layout>
  );
}
