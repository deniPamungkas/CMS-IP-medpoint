import React, { useState } from "react";
import Button from "../atoms/button";

const Dashboard: React.FC = () => {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const email = window.localStorage.getItem(
    "sb-gamitsljjtdiitmhxzuz-auth-token"
  );

  if (email == null) {
    window.location.href = "http://localhost:5173/login";
  }

  const handleLogout = async () => {
    try {
      setIsloading(true);
      window.localStorage.removeItem("sb-gamitsljjtdiitmhxzuz-auth-token");
    } catch (error) {
      setIsloading(true);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full h-[70px] bg-blue-900 px-5 flex justify-start items-center">
        <h1 className="text-2xl text-white">Dashboard</h1>
      </div>
      <div className="px-5 flex flex-col space-y-2 py-3">
        <h2 className="text-xl">
          welcome {email ? JSON.parse(email).user.email : "not logged in"}
        </h2>
        <Button
          style=""
          variant="secondary"
          buttonType="button"
          disabled={isLoading}
          label="Logout"
          onClick={handleLogout}
          size="medium"
        />
      </div>
    </div>
  );
};

export default Dashboard;
