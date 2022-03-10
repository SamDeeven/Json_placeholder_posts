import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom';
import { userInfo } from '../redux/actions';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const CardInfo = () => {
    const user = useSelector((state)=> state.user)
    const {userId, title, body} = user;
    const {id} = useParams();
    const dispatch = useDispatch();
    // console.log(id)



    const fetchUserInfo = async() =>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        dispatch(userInfo(response.data))
        console.log(response.data)

    }
    useEffect(()=>{
        fetchUserInfo();
    },[])
  return (
    <div>
        <div className="card">
  <div className="card-header">
    ID : {id}
  </div>
  <div className="card-body">
    <p className="card-text">User ID: {userId}</p>
    <h5 className="card-title">Title: {title}</h5>
    <p className="card-text">Body: {body}</p>


    <Link to="/" className="btn btn-primary">Go Back</Link>
  </div>
</div>
    </div>
  )
}

export default CardInfo
