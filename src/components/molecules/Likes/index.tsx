import React from 'react'
import Detail from '../Detail';

const Likes = ({data}:any) => {
  console.log(data,"bgfv")
  return (
    <div>
      {data.length>0 && <Detail imgData={data?.[0]?.imgData} userData={data?.[0]?.attributes} />} 
      {data.length<=0 && <p>You haven't liked anyone</p>}
    </div>
  )
}

export default Likes;