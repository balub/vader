import React from "react";
import UserAuthCard from "./components/UserAuthCard";

const SignIn: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 h-screen">
      <UserAuthCard />
    </div>
  );
};

export default SignIn;
