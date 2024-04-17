import React from 'react';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-black">
      <div className="w-full h-96  flex justify-center items-center">
        <div className="w-1/6 h-80  mr-8 flex justify-center items-start flex-wrap ">
          <ul>
            <li className="p-3 text-white font-bold text-xs">RESOURCES</li>
            <li className="p-3 text-white font-bold text-xs">GIFT CARDS</li>
            <li className="p-3 text-white font-bold text-xs">FIND A STORE</li>
            <li className="p-3 text-white font-bold text-xs">BECOME A MEMBER</li>
            <li className="p-3 text-white font-bold text-xs">NIKE X NBA</li>
            <li className="p-3 text-white font-bold text-xs">NIKE JOURNAL</li>
            <li className="p-3 text-white font-bold text-xs">Site Feedback</li>
          </ul>
        </div>
        <div className="w-1/6 h-96  mr-8 flex justify-center items-end flex-wrap ">
          <ul>
            <li className="p-3 text-white font-bold text-xs">HELP</li>
            <li className="p-3 text-gray-400 font-bold text-xs">Get Help</li>
            <li className="p-3 text-gray-400 font-bold text-xs">Order Status</li>
            <li className="p-3 text-gray-400 font-bold text-xs">Shipping and Delivery</li>
            <li className="p-3 text-gray-400 font-bold text-xs">Returns</li>
            <li className="p-3 text-gray-400 font-bold text-xs">Order Cancellation</li>
            <li className="p-3 text-gray-400 font-bold text-xs">Payment Options</li>
            <li className="p-3 text-gray-400 font-bold text-xs">Gift Card Balance</li>
            <li className="p-3 text-gray-400 font-bold text-xs">Contact Us</li>
          </ul>
        </div>
        <div className="w-1/6 h-80  mr-8 flex justify-center items-start flex-wrap  ">
          <ul>
            <li className="p-3 text-white font-bold text-xs">COMPANY</li>
            <li className="p-3 text-gray-400 font-bold text-xs">About Nike</li>
            <li className="p-3 text-gray-400 font-bold text-xs">News</li>
            <li className="p-3 text-gray-400 font-bold text-xs">Careers</li>
            <li className="p-3 text-gray-400 font-bold text-xs">Investors</li>
            <li className="p-3 text-gray-400 font-bold text-xs">Purpose</li>
            <li className="p-3 text-gray-400 font-bold text-xs">Sustainability</li>


          </ul>
        </div>
        <div className="w-1/6 h-80  mr-8 flex justify-center items-start flex-wrap  ">
          <ul>
            <li className="p-3 text-white font-bold text-xs">PROMOTIONS & DISCOUNTS</li>
            <li className="p-3 text-gray-400 font-bold text-xs">Student</li>
            <li className="p-3 text-gray-400 font-bold text-xs">Military</li>
            <li className="p-3 text-gray-400 font-bold text-xs">Teacher</li>
            <li className="p-3 text-gray-400 font-bold text-xs">First Responders & Medical Professionals</li>
          </ul>
        </div>
        <div className="w-1/6 h-80  mr-8 flex justify-center items-start flex-wrap  ">
          <div className="w-10 h-10 rounded-full bg-red-500 ml-5">
            <Image className="w-full h-full rounded-full" src="/x.png" width={1000} height={1000}/>
          </div>
          <div className="w-10 h-10 rounded-full bg-red-500 ml-5">
            <Image className="w-full h-full rounded-full" src="/f.jpeg" width={1000} height={1000}/>
          </div>
          <div className="w-10 h-10 rounded-full bg-red-500 ml-5">
            <Image className="w-full h-full rounded-full" src="/yt.png" width={1000} height={1000}/>
          </div>
          <div className="w-10 h-10 rounded-full bg-red-500 ml-5">
            <Image className="w-full h-full rounded-full" src="/inst.jpeg" width={1000} height={1000}/>
          </div>
        </div>
      </div>
      <div className="w-full h-32 flex justify-between items-center">
        <div className="w-1/3 h-full flex justify-end items-end">
          <ul className="flex">
            <li className="text-white text-sm p-4">United States</li>
            <li className="text-gray-400 text-sm p-4">© 2024 Nike, Inc. All Rights Reserved</li>
          </ul>
        </div>
        <div className="w-1/2 h-full  flex flex-wrap items-center justify-center">
          <div className="w-full h-12 flex justify-around items-center mr-12">
            <ul className="flex justify-center ">
              <li  className="text-sm p-2 text-gray-400">Guides</li>
              <li  className="text-sm p-2 text-gray-400" >Terms of Sale</li>
              <li  className="text-sm p-2 text-gray-400" >Terms of Use</li>
              <li  className="text-sm p-2 text-gray-400" >Nike Privacy Policy</li>
              <li  className="text-sm p-2 text-gray-400" >Your Privacy ChoicesYour Privacy Choices</li>
            </ul>
          </div>
          <div className="w-full h-6 flex justify-end mr-20">
            <ul>
              <li className="text-gray-400 text-sm ">CA Supply Chains Act</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

