import React from "react";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap ">
          <div className="min-w-[200px] h-auto flex-col items-center justify-start ">
            <div className=" font-bold text-[16px]  ">Social</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer ">
              <FaInstagram />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer ">
              <FaGithub />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer ">
              <FaDiscord />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer ">
              <FaFacebook />
              <span className="text-[15px] ml-[6px]">Facebook</span>
            </p>
          </div>

          <div className="min-w-[200px] h-auto flex-col items-center justify-start ">
            <div className=" font-bold text-[16px]  ">Contact Us</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer ">
              <FaPhoneAlt />
              <span className="text-[15px] ml-[6px]">+91 7906293268</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer ">
              <FaMailBulk />
              <span className="text-[15px] ml-[6px]">Yavi5448@gmail.com</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer ">
              <FaInstagram />
              <span className="text-[15px] ml-[6px]">anubhav_yadav06</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mb-[20px] text-[15px] text-center ">
        &copy; Y.AnuBhav 2024 Inc. All Rights reserved
      </div>
    </div>
  );
}

export default Footer;
