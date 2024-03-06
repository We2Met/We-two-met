"use client";
import { useState } from "react";
import Detail from "../../molecules/Detail";
import Images from "../../molecules/Images";
import ProfileHeader from "../../molecules/ProfileHeader";
import Edit from "../../molecules/Edit";
import ViewDetail from "../../molecules/ViewDetail";

const Home = (props: any) => {
  const { serverData } = props;
  const [active, setActive] = useState();
  const [userData, setUserData] = useState(serverData?.bodyData?.attributes);

  return (
    <div>
      <ProfileHeader data={serverData?.headerData} setActive={setActive} />
      <div className="bg-[#dddddd] p-3">
        {active === 1 && (
          <>
            <Images data={serverData?.imgData} />
            {/* <Detail userData={userData} setUserData={setUserData} /> */}
            <ViewDetail />
          </>
        )}
        {active === 0 && (
          <>
            <Edit data={serverData?.imgData} />
            <Detail
              userData={userData}
              setUserData={setUserData}
              isEdit={true}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
