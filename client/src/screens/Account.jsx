import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getUser } from '../services/apiConfig';



export default function Account() {
  const [user, setUser] = useState("");
  const {id} = useParams();

  useEffect(()=>{
    const fetchUser = async ()=>{
      const res = await getUser(id)
      setUser(res.data.userProfile);
    }
    fetchUser();
  },[])

  if(id === 'null'){
    return (
      <div className="flex flex-col items-center">
      <h2>Account Info</h2>
      <form className="flex flex-col items-center bg-gray-300 m-5 p-5 w-70">
          <h3>Please login to view account information.</h3>
          <Link to="/login" className='text-blue-600'>Login</Link>
      </form>
  </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
    <h2>Account Info</h2>
    <form className="flex flex-col items-center bg-gray-300 m-5 p-5 w-70">
        <h3 className='text-pink-800'>E-mail:</h3>
        <div>{user.email}</div>
        <h3 className='text-pink-800'>Username:</h3>
        <div>{user.userName}</div>
        <h3 className='text-pink-800'>Password:</h3>
        <div>{user.password_digest}</div>
        <br />
        <Link to={`/edit/${id}`} className='text-blue-600'>Edit</Link>
    </form>
</div>
  );
}
