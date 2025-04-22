import React, { useState } from "react";

const ProfileDropdown = ({ user, onLogout }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Profile Icon */}
      <button
        className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-semibold cursor-pointer hover:bg-blue-600"
        onClick={() => setOpen(!open)}
      >
        {user?.name ? user.name[0].toUpperCase() : "?"}
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg p-4">
          <p className="font-semibold">{user?.name || "Guest"}</p>
          <p className="text-sm text-gray-600">{user?.email}</p>
          
          {/* ✅ Display Mobile Number if available */}
          {user?.mobile && <p className="text-sm text-gray-600">📞 {user.mobile}</p>}

          <button
            className="mt-2 w-full text-red-500 hover:text-red-700"
            onClick={() => {
              setOpen(false);
              onLogout();
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
