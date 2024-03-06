"use client";
import React, { useEffect, useState } from "react";
import ProfileHeader from "../../molecules/ProfileHeader";
import Received from "../../molecules/Received";
import PoolProfile from "../../molecules/PoolProfile";
import Likes from "../../molecules/Likes";
import { redirect } from "next/navigation";
import axios from "axios";

const Pool = ({ serverData, eventId }: any) => {
  const [active, setActive] = useState(1);
  const [likedProfile, setLikedProfile] = useState([]);
  const [userId, setUserId] = useState(null);
  const [apiData, setApiData] = useState();

  const initializer = async () => {
    const res = await axios.get(
      `https://strapi.evingle.com/api/matches?populate=*&event_id=${eventId}&user_id=3`
    );
    setApiData(res.data);
  };
  console.log(apiData,"api")

  useEffect(() => {
    initializer();
  }, [active]);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const getData = JSON.parse(localStorage.getItem("userId"));
  //     if (!getData && !userId) {
  //       redirect("/login");
  //     }
  //     setUserId(getData);
  //   }
  // }, []);
  // if (!userId) {
  //   return <></>;
  // }
  return (
    <>
      <ProfileHeader
        data={serverData?.headerData}
        active={active}
        setActive={setActive}
      />
      {active === 0 && <Received data={apiData?.user_data.recieved_user} />}
      {active === 1 && (
        <PoolProfile
          data={apiData?.data}
          likedProfile={likedProfile}
          setLikedProfile={setLikedProfile}
          eventId={eventId}
        />
      )}
      {active === 2 && <Likes data={apiData?.user_data.liked_user.data} />}
    </>
  );
};

export default Pool;
