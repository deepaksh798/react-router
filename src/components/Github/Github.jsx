import React, { useEffect, useState } from 'react'
import { useLoaderData } from "react-router-dom";

function Github() {

  // Here we use Loader
  // Loader is responsible for fetching data before the corresponding component renders. 

  const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/deepaksh798')
    //     .then((Response) => Response.json())
    //     .then((data) => {console.log(data)
    //     setData(data)
    //     })
        
    // })

  return (
    <div className='bg-gray-600 text-white text-3xl p-4 flex items-center'>
    <img src={data.avatar_url} alt="git picture" width={300} />
      <div>
      <h1>Github profile: {data.login}</h1>
      <h1>Github repositories: {data.public_repos}</h1>
      </div>
    </div>
  )
}

export default Github

//Here we use loader,Loader is responsible for fetching data before the corresponding component renders
//we create a function githubInfoLoader and declare in main.jsx file

export const githubInfoLoader = async() => {
  const responce = await fetch('https://api.github.com/users/deepaksh798')
  return responce.json()
}