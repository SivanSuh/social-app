import React from "react";
import Style from "./style.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Profile = () => {
  const { formContent } = useSelector((state: RootState) => state.user);
  return (
    <div className={Style.container}>
      <div>
        <div className={Style.icons}>ŞS</div>
        <p>{formContent.userName}</p>
        <div>{formContent.email}</div>
      </div>
      <div>
        <p>Detaylar</p>
      </div>
    </div>
  );
};

export default Profile;
