import { MdOutlineNoEncryption } from "react-icons/md";
import { PiMessengerLogoLight } from "react-icons/pi";

export default function Messenger() {
  return (
    <div className="flex items-center  h-full flex-col">
      <PiMessengerLogoLight className="mt-[40%] text-gray-3" size={90} />

      <h1 className="text-2xl text-gray-3  ">Messenger for Web</h1>
      <p className="text-sm text-gray-3">
        Send and receive messages without keeping your phone online
      </p>
      <p className="text-sm text-gray-3">
        Use Messenger on up to 0 linked devices and 0 phone at at the same time.
      </p>
      <p className="mt-auto text-sm flex items-center gap-2 text-gray-3">
        <MdOutlineNoEncryption />
        Not End-to-end encrypted right now, ill work on it.
      </p>
    </div>
  );
}
