import React from "react";
import utilStyles from "../styles/theme.util.module.css";
import style from "../styles/Home.module.css";
import Link from "next/link";
import IconsLinks from "../public/user/IconsLinks.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button(props) {
  const {
    library,
    config,
    findIconDefinition,
  } = require("@fortawesome/fontawesome-svg-core");
  var IconsLinksJSON = JSON.parse(JSON.stringify(IconsLinks));

  function iconPicker() {
    if (String(IconsLinksJSON[props.image]["prefix"]) != "local") {
      return (
        <span className={`${utilStyles.headingMd} `}>
          <FontAwesomeIcon
            icon={findIconDefinition({
              prefix: String(IconsLinksJSON[props.image]["prefix"]),
              iconName: String(IconsLinksJSON[props.image]["iconName"]),
            })}
            size="xl"
          />
        </span>
      );
    } else {
      return (
        <span className={`${utilStyles.headingMd} `}>
          {/* <div
            className="icon"
            
          /> */}
          <div
            src={
              "./CustomIcons/" + String(IconsLinksJSON[props.image]["iconName"])
            }
            className={utilStyles.logoImage}
            style={{
              maskImage: `url(${"./CustomIcons/" + IconsLinksJSON[props.image]["iconName"]})`,
              WebkitMaskImage: `url(${"./CustomIcons/" + IconsLinksJSON[props.image]["iconName"]})`,
            }}
          />
        </span>
      );
    }
  }

  return (
    <Link href={props.url} target={"_blank"}>
      <button id={props.name} className={style.button}>
        <section className={style.horizontal}>
          <div className={style.logoPlacement}>{iconPicker()}</div>
          <div className={style.textPlacement}>
            <div className={utilStyles.headingMd}>{props.name}</div>
          </div>
        </section>
      </button>
    </Link>
  );
}
