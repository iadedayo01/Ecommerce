// import React from 'react'

import { useState } from "react";
import OtpComponent from "../components/OTP/OtpComponent";
import OtpModal from "../components/OTP/OtpModal";

const OTP = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <div className=" h-screen w-full">
        <OtpComponent setOpenModal={setOpenModal} />
      </div>

      {openModal && <OtpModal setOpenModal={setOpenModal}/>}
    </>
  );
};

export default OTP;
