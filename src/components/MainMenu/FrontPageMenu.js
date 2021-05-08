import {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function FrontPageMenu() {

  const [mainNav, setMainNav]= useState([]);
  
  useEffect(()=>{
    axios.get('./data/data.json')
    .then(res=>{
      //console.log(res.data);
      setMainNav(res.data.MainNav);
    })
    .catch(error=> console.log(error))
  },[]);
  
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex">      
      {
        mainNav.length > 0 &&
        mainNav.map((item)=>{
          return item.front && <div>
            <Link className="p-10 m-10 text-6xl text-gray-200 border hover:border-gray-900" to={item.link}>
              {item.name}
            </Link>
            </div>
        })
      }
      </div>
      <div className="mt-28 text-3xl text-gray-100 filter drop-shadow-lg p-10  bg-gray-400 bg-opacity-25">
        <p>123 Road Name, The Street, City, ZA9009TW</p>
      </div>
    </div>
  )
}

export default FrontPageMenu
