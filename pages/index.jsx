import DataBiz from "../public/images/client-databiz.svg";
import AudioPhile from "../public/images/client-audiophile.svg";
import Maker from "../public/images/client-maker.svg";
import Meet from "../public/images/client-meet.svg";
import Image from "next/image";
import heroImageMobile from "../public/images/image-hero-mobile.png";
import heroImageDesktop from "../public/images/image-hero-desktop.png";
import Head from "next/head";
import Button from "../components/Button";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Snap</title>
      </Head>
      <div className=" flex flex-col-reverse  my-12 items-center justify-between mx-auto md:flex-row md:container md:space-x-4">
        <div className="flex flex-col mx-auto items-center flex-nowrap space-y-10 text-almostBlack">
          <h1 className="text-4xl font-bold sm:text-5xl">Make remote work</h1>
          <p className=" mx-auto text-center text-xl text-mediumGray font-medium sm:text-3xl">
            Get your team in sync, no matter your location. <br /> Streamline
            processes, create team rituals , and watch productivity soar
          </p>
          <div>
            <Button className="bg-almostBlack text-almostWhite py-3 px-6 font-bold rounded-xl">
              
              Learn more
            </Button>
          </div>
          <div className="logos flex space-x-1  mx-auto  items-center justify-between sm:space-x-6 md:space-x-8">
            <DataBiz />
            <AudioPhile />
            <Maker />
            <Meet />
          </div>
        </div>
        <div
          id="image-container-mobile"
          className="w-full mx-auto mb-14 md:hidden"
        >
          <Image src={heroImageMobile} alt="hero-mobile" />
        </div>
        <div
          id="image-container-desktop"
          className="hidden w-full mx-auto mb-14 md:block"
        >
          <Image src={heroImageDesktop} alt="hero-mobile" />
        </div>
      </div>
    </div>
  );
}

const img = "./images/image-hero-mobile.png";
