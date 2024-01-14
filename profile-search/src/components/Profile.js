import React from "react";

const Profile = ({ user }) => {
  const { name, bio } = user;
  return (
    <div>
      <h1>{name}</h1>
      <p>{bio}</p>
    </div>
  );
};

export default Profile;
