import React from "react";
import { logout } from "../firebase/auth";
import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
  const { currentUser, setCurrentUser } = useAuth();

  console.log(currentUser);

  const handleLogout = () => {
    logout()
      .then((res) => {
        console.log(res);
        setCurrentUser();
      })
      .catch((err) => console.log(err));
  };

  return (
    <article>
      <button onClick={handleLogout}>logout</button>
    </article>
  );
};

export default Profile;
