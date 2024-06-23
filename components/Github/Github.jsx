import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData()

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const data = fetch("https://api.github.com/users/karan-develops")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers : {data.followers}
      <img className="rounded-full" src={data.avatar_url} alt="Git Picture" width={300}/>
      <span className="text-emerald-300">Bio : {data.bio}</span>
    </div>
  );
};

export default Github;
// Optimized fetch
export const githubInfoLoader = async()=>{
  const response = await fetch('https://api.github.com/users/karan-develops')
  return response.json()
}