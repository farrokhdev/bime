import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { MobileSide } from "./desktop/MobileSide";

export const Navbar = () => {
  const [sideVisible, setSideVisible] = useState(false);

  const handleClose = () => {
    setSideVisible(!sideVisible);
  };

  return (
    <>
      <nav className="nav-sec d-flex-justify-between g-10 f-14 padding">
        <Link href={"/"}>
          <a className="d-flex-center g-5">
            Vehicle insurance
            <Image src={"/icons/arrow-down.svg"} width={11} height={5} />
          </a>
        </Link>
        <Link href={"/"}>
          <a className="d-flex-center g-5">
            Property insurance
            <Image src={"/icons/arrow-down.svg"} width={11} height={5} />
          </a>
        </Link>
        <Link href={"/"}>
          <a className="d-flex-center g-5">
            Liability insurance
            <Image src={"/icons/arrow-down.svg"} width={11} height={5} />
          </a>
        </Link>
        <Link href={"/"}>
          <a className="d-flex-center g-5">
            Damage online
            <Image src={"/icons/arrow-down.svg"} width={11} height={5} />
          </a>
        </Link>
        <Link href={"/"}>
          <a className="d-flex-center g-5">
            People insurance
            <Image src={"/icons/arrow-down.svg"} width={11} height={5} />
          </a>
        </Link>
        <Link href={"/"}>
          <a className="d-flex-center g-5">
            Inaurance companies
            <Image src={"/icons/arrow-down.svg"} width={11} height={5} />
          </a>
        </Link>
        <Link href={"/"}>
          <a className="d-flex-center g-5">
            Blog
            <Image src={"/icons/arrow-down.svg"} width={11} height={5} />
          </a>
        </Link>
        <button className="btn-g">Sign up / Login</button>
      </nav>
      <div className="mobile-nav-sec padding" onClick={() => handleClose()}>
        <AiOutlineAlignLeft />
      </div>
      <MobileSide sideVisible={sideVisible} handleClose={handleClose} />
    </>
  );
};
