import Image from "next/image";
import { Inter } from "next/font/google";
import { GrLocation, GrMailOption } from "react-icons/gr";
import { PiPhoneCallLight } from "react-icons/pi";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" flex flex-col   w-full ">
      <nav className=" py-[11px] px-[clamp(3.1rem,8.375vw,7.4rem)] flex justify-between bg-purple text-white">
        <section className=" flex gap-[clamp(0.9rem,2vw,1.8rem)] ">
          <div className=" flex  gap-[10px] items-center ">
            <GrLocation color="#DAD4FF" size={20} />

            <p className=" text-creame text-[14px] font-medium font-[Inter]">
              123 Str., Lagos, Nigeria
            </p>
          </div>

          <div className=" flex items-center gap-[9.6px]">
            <GrMailOption color="#DAD4FF" />
            <p className=" text-creame text-[14px] font-medium font-[Inter]">
              info@pathfinders.com
            </p>
          </div>
        </section>
        <section className="flex gap-[1.18rem]">
          <div className=" flex items-center gap-[9.6px]">
            <PiPhoneCallLight color="#DAD4FF" size={20} />
            <p className=" text-creame text-[14px] font-medium font-[Inter]">
              Call us:
            </p>
            <p className=" text-creame text-[14px] font-medium font-[Inter]">
              234 801234567
            </p>
          </div>

          <div className=" flex gap-[9.6px] items-center">
            <p className=" text-[#DAD4FF] text-[14px] font-medium">
              Follow Us On :
            </p>
            <article className=" flex gap-[9.6px]">
              <FaFacebookF color="#E7EFFC" size={16} />
              <FaTwitter color="#E7EFFC" size={16} />
              <FaWhatsapp color="#E7EFFC" size={18} />
              <FaLinkedinIn color="#E7EFFC" size={16} />
              <FaYoutube color="#E7EFFC" size={16} />
            </article>
          </div>
        </section>
      </nav>

      <header className="py-[11px] px-[clamp(3.1rem,8.375vw,7.4rem)] justify-between flex">
        <section className=" flex gap-[clamp(2.5rem,5.9vw,5.3rem)]">

        </section>

      </header>
    </main>
  );
}