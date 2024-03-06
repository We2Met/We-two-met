import Home from '../../src/components/organisms/Home';
import dataJson from '../../src/components/data/data.json';
import axios from 'axios';

const page =async () => {

  // const res=await axios.get('https://strapi.evingle.com/api/user-profiles/1');
  // console.log(res,"here");
  return <Home serverData={dataJson} />
}

export default page;