import Pool from "@/src/components/organisms/Pool";
import React from "react";
import poolJson from "../../../src/components/data/pool.json";
import axios from "axios";

const page = async ({ params }: any) => {
  const res = await axios.get(
    `https://strapi.evingle.com/api/matches?populate=*&event_id=${params.id}&user_id=2`
  );

  return <Pool serverData={poolJson} apiData={res.data} eventId={params.id} />;
};

export default page;
