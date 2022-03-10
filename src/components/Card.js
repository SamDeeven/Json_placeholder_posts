import React from 'react'
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux'
import './card.css'

const Card = () => {
  const users = useSelector((state) => state.allUsers.users);
  const usersData = users.map((user)=>{
    const {userId, id, title, body} = user;
    return(
      <div className="row" key={id}>
              <div className="">

        <div className="card" style={{"width": "18rem"}}>
          <div className="card-body">
          

    <h5 className="card-title">User ID: {userId}</h5>
    <Link to={`/user/${id}`}><h6 className="card-subtitle mb-2 text-muted">Post ID: {id}</h6></Link>
    <p className="card-text">Title: {title} </p>
    <p className="card-text">Body: {body} </p>
    

  </div>
    </div>
    </div>
    </div>
    );
  });
  return (
  <> 
  {usersData} 
  </>
  )
};

export default Card
