import { useEffect, useState } from 'react';
import axios from 'axios';
import { BsFillFileLockFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GoCalendar } from "react-icons/go";
import { TfiEmail } from "react-icons/tfi";
import { FaUserAlt } from "react-icons/fa";

import { Data, State } from '../interfaces'

import styles from './Home.module.css'

import { useParams } from "react-router-dom";

export const Home = () => {
  const init = {
    isPass: false,
    isPhone: false,
    isMap: false,
    isCalendar: false,
    isEmail: false,
    isUser: true,
  }

  const reset = {
    isPass: false,
    isPhone: false,
    isMap: false,
    isCalendar: false,
    isEmail: false,
    isUser: false,
  }
  
  const params = useParams<{ id: string }>();
  console.log(params.id)
  
  

  /* Set useState */
  const [data, setData] = useState<Data[]>([]);
  const [error, setError] = useState(null);
  
  /* hover icon */
  const [state, setState] = useState<State>(init)
  
  useEffect(() => {
    let url = 'https://randomuser.me/api';

    if (params.id) {
      url = 'https://randomuser.me/api/?nat='+ params.id;
    } else {
      url = 'https://randomuser.me/api';
    }
    
    axios.get(url)
      .then(response => {
        console.log(response.data.results)
        setData(response.data.results);
        setError(null);
      })
      .catch(error => {
        setError(error.message);
        setData([]);
      });
  }, [params.id]);
  
  const handleMouseOver = (type: keyof State) => () => {
    setState({
      ...reset,
      [type]: true,
    });
  };
  
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className={styles.contain}>
      {error && <div>{error}</div>}
      
      {
        data && data.map(item => (
          <div className={styles.center}>
            <img src={item.picture.large} alt="pic" className={styles.picture} />
            
            {state.isPass && 
              <div className={styles.center}>
                <p className={styles.firstp}>My password is</p>
                <p className={styles.secondp}>{item.login.password}</p>
              </div>
            }
            
            {state.isPhone && 
            <div className={styles.center}>
              <p className={styles.firstp}>My phone number is</p>
              <p className={styles.secondp}>{item.cell}</p>
            </div>
            }
            
            {state.isMap && 
              <div className={styles.center}>
                <p className={styles.firstp}>My address is</p>
                <p className={styles.secondp}>{item.location.street.number} {item.location.street.name}, {item.location.country}</p>
              </div>
            }
    
            {state.isCalendar && 
              <div className={styles.center}>
                <p className={styles.firstp}>My birthday is</p>
                <p className={styles.secondp}>{new Date(item.dob.date).toLocaleDateString('en-GB')}</p>
              </div>
            }
            
            {state.isEmail && 
              <div className={styles.center}>
                <p className={styles.firstp}>My email address is</p>
                <p className={styles.secondp}>{item.email}</p>
              </div>
            }
            
            {state.isUser && 
              <div className={styles.center}>
                <p className={styles.firstp}>Hi, My name is</p>
                <p className={styles.secondp}>{item.name.first} {item.name.last}</p>
              </div>
            }
            
            
        </div>
        ))
      }
      
      <div className={styles.iconContainer}>
        <FaUserAlt size={30} onMouseOver={handleMouseOver('isUser')} className={styles.icon} />
        <TfiEmail size={30} onMouseOver={handleMouseOver('isEmail')} className={styles.icon} />
        <GoCalendar size={30} onMouseOver={handleMouseOver('isCalendar')} className={styles.icon} />
        <FaMapMarkedAlt size={30} onMouseOver={handleMouseOver('isMap')} className={styles.icon} />
        <AiFillPhone size={30} onMouseOver={handleMouseOver('isPhone')} className={styles.icon} />
        <BsFillFileLockFill size={30} onMouseOver={handleMouseOver('isPass')} className={styles.icon} />
      </div>
    </div>
  );
}
