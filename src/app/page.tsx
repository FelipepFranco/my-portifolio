import { Header } from "./components/header/header";
import Image from "next/image";

import  "./styles/home.scss";
import { Experience } from "./components/experience/experience";
import { Info } from "./components/information/information";
import { EmailIcon } from "./components/icons/email-icon";
import { SocialBtns } from "./components/social-btns/social-btns";

export default function Home() {
  return (
    <main className="container">
      <Header/>         
      <Experience/>
      <Info/>
        <div className="buttons">
        <SocialBtns/>
          <button className="btn-primary">
            Contact me
              <EmailIcon/>
            </button>
        </div>
    </main>
  );
}
