import styles from "../styles/Home.module.css";
import React from "react";
import userInfo from "../public/user/userInfo.json";

export default function Layout({ home, children }) {
  var userInfoJSON = JSON.parse(JSON.stringify(userInfo));
  return (
    <div className={styles.background}>
      <main>{children}</main>
      <section className={styles.container}>
        Copyrights © {new Date().getFullYear()} {userInfoJSON["name"]}
      </section>
    </div>
  );
}
