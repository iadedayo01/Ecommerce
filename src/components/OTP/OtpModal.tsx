import { GoCheckCircleFill } from "react-icons/go";
import Button from "../../Shared/Button";

interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const OtpModal = ({ setOpenModal }: ModalProps) => {
  return (
    <div
      className=" fixed top-0 left-0 bg-[#344054B2] inset-0 bg-opacity-40 flex justify-center items-center h-screen "
      style={{ backdropFilter: "blur(2.06999969482422px)" }}
    >
      <div className="bg-white flex space-y-4 justify-center px-5 items-center flex-col size-71">
        <GoCheckCircleFill className="text-4xl" />
        <h1 className=" font-bold">Password Changed Successfully</h1>
        <h1 className="text-xs">Your password has been updated successfully</h1>
        <Button
          text="Verify"
          BG="bg-[#131118]"
          textColor="text-white"
          borderRadius="rounded-sm"
          padding="py-2 px-4"
          width="w-full"
          onclick={() => setOpenModal(false)}
        />
      </div>
    </div>
  );
};

export default OtpModal;
