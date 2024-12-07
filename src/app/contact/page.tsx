import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-white mb-[140px]">
      <div className="flex flex-row space-x-3 ml-[135px] py-20">
        <Link href={"/"}>
          <p className="text-gray-500">Home / </p>
        </Link>
        <p>Contact</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-auto lg:w-[380px] h-[457px] ml-8 lg:ml-[135px] mb-5 lg:mb-0 divide-gray-500 divide-y-2 shadow-md shadow-slate-500">
          <div className="px-[35px] pt-[40px] h-2/4 ">
            <div className="flex flex-row">
              <Image
                src="/contact/icons-phone.png"
                alt="phone"
                width={50}
                height={50}
                className="flex items-center justify-center w-[40px] h-[40px]"
              />
              <h2 className="font-medium text-base pb-4 pl-2 pt-2 flex items-center">
                Call To Us
              </h2>
            </div>
            <div className="w-auto lg:w-[262px] h-[58px] space-y-4">
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone No: +92 123 456789</p>
            </div>
          </div>

          <div className="px-[35px] pt-[40px] h-2/4">
            <div className="flex flex-row">
              <Image
                src="/contact/icons-mail.png"
                alt="mail"
                width={50}
                height={50}
                className="flex items-center justify-center w-[40px] h-[40px]"
              />
              <h2 className="font-medium text-base pb-4 pl-2 pt-2 flex items-center">
                Write To Us
              </h2>
            </div>
            <div className="w-auto lg:w-[262px] h-[58px] space-y-4">
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[1000px] h-[457px] ml-[30px] shadow-md shadow-slate-500">
          <form className="px-[31px] pt-[40px]">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              required
              className="bg-gray-100 mr-4 mb-2 lg:mb-0 py-[13px] pl-[16px] rounded-md w-auto lg:w-[235px] h-[50px] text-[16px]"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
              className="bg-gray-100 mr-4 mb-2 lg:mb-0 py-[13px] pl-[16px] rounded-md w-auto lg:w-[235px] h-[50px] text-[16px]"
            />
            <input
              type="number"
              placeholder="Your Phone"
              name="number"
              required
              className="bg-gray-100 py-[13px] pl-[16px] rounded-md w-auto lg:w-[235px] h-[50px] text-[16px]"
            />
            <br />
            <textarea
              placeholder="Your Message"
              name="message"
              rows={6}
              cols={75}
              className="bg-gray-100 mt-7 pt-[13px] pl-[16px] rounded-md w-[300px] lg:w-[737px] h-[207px] text-[16px]"
            ></textarea>

            <button className="w-[215px] h-[56px] bg-[#DB4444] text-white text-[16px] font-medium rounded-sm px-[48px] py-[16px] mt-[25px] lg:ml-[522px] ">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
