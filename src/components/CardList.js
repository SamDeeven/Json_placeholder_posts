import React,{useEffect} from 'react'
import axios from 'axios';
import { getUsers } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux'
import Card from './Card';

const CardList = () => {
    const users = useSelector((state) => state);
    console.log("Data: ",users);

    const dispatch = useDispatch();

    const fetchUsers = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        dispatch(getUsers(response.data));
        // console.log(response.data)
    }


    useEffect(()=>{
        fetchUsers();
    },[])
    console.log("Users", users)
  return (
    <div>
       <center><h1 style={{fontFamily:"sans-serif"}}>To do List</h1></center>
       <center>  <Card /> </center>
      
    </div>
  )
}

export default CardList
