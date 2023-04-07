import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import styles from './Nationalities.module.css'
import { FaMapMarkedAlt } from 'react-icons/fa';

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
        setData(response.data.results);
        setError(null);
      })
      .catch(error => {
        setError(error.message);
        setData(null);
      });
  }, []);


  /* Previous message before retrieve data from API */
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <h2 className={styles.title}>Please select a Nationality</h2>
      
      <div className={styles.natDiv}>
      {
        data && data.map((item, index) => (
          <Link to={`/users/nationality/${item.nat}`} key={index}>
            <span className={styles.link}><FaMapMarkedAlt size={30} /> {item.nat}</span>
          </Link>
        ))
      }
      </div>
    
    </div>
    
    
  )
}

