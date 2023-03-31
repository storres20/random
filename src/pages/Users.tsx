import { Home } from './Home'
import styles from './Users.module.css'

export const Users = () => {
  return (
    <div>
      <h2 className={styles.title}>Users by nationality</h2>
      
      <Home/>
      <Home/>
      <Home/>
      
    </div>
  )
}
