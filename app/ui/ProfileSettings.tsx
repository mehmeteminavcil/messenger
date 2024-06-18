import React from "react";
import { CiLogout } from "react-icons/ci";

const ProfileSettings = ({ handleSignOut }: any) => {
  return (
    <div
      className="border p-2 absolute top-12 right-0
rounded-lg text-sm text text-gray-4 w-28 bg-bg"
    >
      <button
        className="flex items-center gap-3 cursor-pointer"
        onClick={handleSignOut}
      >
        <CiLogout size={16} /> Logout{" "}
      </button>
    </div>
  );
};

export default ProfileSettings;
