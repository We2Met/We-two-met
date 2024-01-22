import Home from '../../src/components/organisms/Home';
import dataJson from '../../src/components/data/data.json';

const page = () => {
  return <Home serverData={dataJson} />
}

export default page;