import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div style={{ cursor: "pointer" }}>
      <a href="https://twitter.com/IronicSufi">
        <BsTwitter />
      </a>
    </div>
    <div style={{ cursor: "pointer" }}>
      <a href="https://web.facebook.com/sufi.ironic">
        <FaFacebookF />
      </a>
    </div>
    <div style={{ cursor: "pointer" }}>
      <a href="https://www.instagram.com/si_ronic/">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
