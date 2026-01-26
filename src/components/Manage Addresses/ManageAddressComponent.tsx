// import React from 'react'
import { BsPlus } from "react-icons/bs";
import { PiPhoneCallLight } from "react-icons/pi";
import { LiaEdit } from "react-icons/lia";
import { TfiTrash } from "react-icons/tfi";

import Button from "../../Shared/Button";
import type { ReactElement } from "react";

interface NewaddressProps {
  name: string;
  address: string;
  number: string;
  phoneIcon: ReactElement;
  edit: string;
  delete: string;
  editIcon: ReactElement;
  deleteIcon: ReactElement;
}

const ManageAddressComponent = () => {
  const newAddress: NewaddressProps[] = [
    {
      name: "Robert Fox",
      address: "4517 Washington Ave, Manchester, Kentucky 39495",
      number: "(209) 555-0104",
      phoneIcon: <PiPhoneCallLight />,
      edit: "Edit",
      delete: "Delete",
      editIcon: <LiaEdit />,
      deleteIcon: <TfiTrash />,
    },
    {
      name: "John Williams",
      address: "3891 Ranchview Dr, Richardson, California 32445",
      number: "(342) 868-9274",
      phoneIcon: <PiPhoneCallLight />,
      edit: "Edit",
      delete: "Delete",
      editIcon: <LiaEdit />,
      deleteIcon: <TfiTrash />,
    },
    {
      name: "Alexa Johnson",
      address: "4517 Washington Ave, Manchester, Kentucky 39495",
      number: "(783) 364-2846",
      phoneIcon: <PiPhoneCallLight />,
      edit: "Edit",
      delete: "Delete",
      editIcon: <LiaEdit />,
      deleteIcon: <TfiTrash />,
    },
  ];

  return (
    <div className=" flex flex-col gap-10">
      <Button
        text="Add New Address"
        BG="bg-[#131118]"
        textColor="text-white"
        borderRadius="rounded-sm"
        padding="py-2 "
        width="w-50"
        icon={<BsPlus className="text-2xl" />}
      />
      <div className="flex flex-col">
        {newAddress.map((addressInfo) => (
          <div className="flex border-b py-5 border-gray-300 justify-between">
            <div className="space-y-1">
              <h1 className="font-bold text-lg">{addressInfo.name}</h1>
              <h1 className="text-sm">{addressInfo.address}</h1>
              <div className="flex text-sm gap-1 items-center">
                <div>{addressInfo.phoneIcon}</div>
                <h1>{addressInfo.number}</h1>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex bg-gray-400 py-1 px-2 cursor-pointer justify-center gap-1 rounded-sm items-center">
                <div>{addressInfo.editIcon}</div>
                <h1>{addressInfo.edit}</h1>
              </div>
              <div className="flex py-1 px-2 cursor-pointer rounded-sm bg-gray-200 justify-center gap-1 text-red-400 items-center">
                <div>{addressInfo.deleteIcon}</div>
                <h1>{addressInfo.delete}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAddressComponent;
