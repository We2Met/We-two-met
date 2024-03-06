import React, { useState } from "react";
import Detail from "../Detail";
import axios from "axios";

const PoolProfile = ({ data, likedProfile, setLikedProfile, eventId }: any) => {
  const [idx, setIdx] = useState(0);

  const onCrossHandler = () => {
    setIdx(idx + 1);
  };

  const onYesHandler = async (likedUserId: number) => {
    const likedProfile = data.filter((item: any) => item.id === idx);
    setLikedProfile(likedProfile);

    await axios.put(`https://strapi.evingle.com/api/matches/${eventId}`, {
      data: {
        liked_id: likedUserId,
        user_id: 3,
      },
    });
  };

  return (
    <>
      <div className=" relative">
        {likedProfile.length <= 0 &&
          data?.map((item: any, index: number) =>
            index === idx ? (
              <>
                <Detail imgData={item?.imgData} userData={item.attributes} />
                {likedProfile?.length <= 0 && (
                  <>
                    <button
                      onClick={onCrossHandler}
                      className=" fixed bottom-16 left-5 border-2 rounded text-black p-5 bg-white "
                    >
                      No
                    </button>
                    <button
                      onClick={() => onYesHandler(item.id)}
                      className=" fixed bottom-16 right-10 border-2 rounded text-black p-5 bg-white "
                    >
                      Yes
                    </button>
                  </>
                )}
              </>
            ) : (
              <></>
            )
          )}
        {likedProfile?.length > 0 && <p>You have reached your limit</p>}
      </div>
    </>
  );
};

export default PoolProfile;
