import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import styles from './Nationalities.module.css'

export const Nationalities = () => {

  interface Data {
    nat: string;
  }
  
  /* Set useState */
  const [data, setData] = useState<Data[] | null>(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    axios.get('https://randomuser.me/api/?inc=nat&results=3')
      .then(response => {
        console.log(response.data.results)
        setData(response.data.results);
        setError(null);
      })
      .catch(error => {
        setError(error.message);
        setData(null);
      });
  }, []);


  return (
    <div>
      <h2>Please select a Nationality</h2>
      
      {
        data && data.map((item, index) => (
          <Link to={`/users/nationality/${item.nat}`}><p key={index} className={styles.link}>{item.nat}</p></Link>
        ))
      }
    
    </div>
    
    
  )
}

