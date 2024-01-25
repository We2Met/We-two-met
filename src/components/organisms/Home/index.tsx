"use client";
import { useState } from "react";
import Detail from "../../molecules/Detail";
import Images from "../../molecules/Images";
import ProfileHeader from "../../molecules/ProfileHeader";
import Edit from "../../molecules/Edit";

const Home = (props: any) => {
  const { serverData } = props;
  const [view, setView] = useState(false);
  const [userData, setUserData] = useState(serverData?.bodyData);

  return (
    <div>
      <ProfileHeader data={serverData?.headerData} setView={setView} />
      {view && (
        <>
          <Images data={serverData?.imgData} />
          <Detail userData={userData} setUserData={setUserData} />
        </>
      )}
      {!view && (
        <>
          <Edit data={serverData?.imgData} />
          <Detail userData={userData} setUserData={setUserData} isEdit={true} />
        </>
      )}
    </div>
  );
};

export default Home;
