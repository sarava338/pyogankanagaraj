import React from "react";
import { logout } from "../firebase/auth";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { currentUser, setCurrentUser } = useAuth();
  const navigate = useNavigate();

  console.log(currentUser?.email);

  const handleLogout = () => {
    logout()
      .then((res) => {
        setCurrentUser({});
        navigate("/login");
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
