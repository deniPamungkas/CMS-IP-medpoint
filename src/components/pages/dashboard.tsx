import React from "react";

const Dashboard: React.FC = () => {
  const email = window.localStorage.getItem(
    "sb-gamitsljjtdiitmhxzuz-auth-token"
  );

  return (
    <div>welcome {email ? JSON.parse(email).user.email : "not logged in"}</div>
  );
};

export default Dashboard;
