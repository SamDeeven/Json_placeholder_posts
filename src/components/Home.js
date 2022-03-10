import React,{useEffect} from 'react'
import CardList from './CardList'
import userAPI from "../userAPI"


const Home = () => {
    useEffect(()=>{
        const fetchUsers = async ()=>{
            const response = await userAPI.get(userAPI)
        }

    },[])



  return (
    <div>
      Home
      <CardList/>
    </div>
  )
}

export default Home
