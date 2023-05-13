import React from "react";
import Style from "./style.module.css";

const Profile = () => {
  return (
    <div className={Style.container}>
      <div>
        <div className={Style.icons}>ŞS</div>
        <div>İsim</div>
      </div>
      <div>
        <p>Paylaşılanlar</p>
      </div>
    </div>
  );
};

export default Profile;
