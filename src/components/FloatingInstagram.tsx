import React from "react";
import "./FloatingInstagram.css";

import { useSiteData } from "../context/SiteDataContext";

export default function FloatingInstagram(): React.ReactElement {
  const data = useSiteData();

  return (
    <div className="floating-instagram">
      <a
        href={data?.socialAccounts[0].url}
        target="_blank"
        rel="noreferrer"
        className="instagram-link"
      >
        <img src="/assets/logos/instagram.png" alt="Instagram" />
      </a>
    </div>
  );
}
