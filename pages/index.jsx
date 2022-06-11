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
      <div className=" flex flex-col-reverse  my-12 items-center justify-between mx-auto md:flex-row md:container md:space-x-4 bg-almostWhite">
        <div className="flex flex-col mx-auto items-center flex-nowrap space-y-12 text-almostBlack sm:justify-self-start md:w-6/12 sm:mx-0 md:mt-18 lg:ml-12">
          <h1 className="text-4xl w-full text-center font-bold sm:text-5xl md:text-left md:text-6xl lg:text-8xl ">Make <span className="md:block">remote work</span></h1>
          <p className=" mx-auto text-center tracking-tight  text-lg font-semibold leading-7 text-mediumGray sm:text-2xl md:text-xl md:w-9/12 md:ml-0 md:text-left">
            Get your team in sync, no matter your location.  Streamline
            processes, create team rituals , and watch productivity soar.
          </p>
          <div className="w-full text-center lg:mb-12 md:text-left">
            <Button className="bg-almostBlack cursor-pointer text-almostWhite h-12 w-5/12 font-bold rounded-xl hover:text-almostBlack hover:bg-almostWhite hover:border hover:border-almostBlack sm:w-4/12 ">
        
              Learn more
            </Button>
          </div>
          <div className="logos w-full flex content-center flex-col space-y-6  mx-auto  items-center justify-between sm:flex-row sm:space-x-4 md:space-x-4 md:w-11/12 md:ml-0 sm:space-y-0 ">
            <DataBiz className='cursor-pointer'/>
            <AudioPhile className='cursor-pointer'/>
            <Maker className='cursor-pointer' />
            <Meet className='cursor-pointer'/>
          </div>
        </div>
        <div
          id="image-container-mobile"
          className=" mx-auto  mb-14 md:hidden"
        >
          <Image src={heroImageMobile} alt="hero-mobile" />
        </div>
        <div
          id="image-container-desktop"
          className="hidden h-full   mx-auto mb-14 sm:w-6/12 md:w-4/12  md:block"
        >
          <Image src={heroImageDesktop} alt="hero-mobile" />
        </div>
      </div>
    </div>
  );
}

const img = "./images/image-hero-mobile.png";
