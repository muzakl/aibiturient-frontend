import styles from './Header.module.css'
import PFP from '../../assets/Hojlund.jpg'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className={styles.headerDiv}>
      <Link to="/" className={styles.link}>
        <h1 className={styles.headerText}>
          <span className={styles.headerSpan}>AI</span>Biturient
        </h1>
      </Link>
      <button className={styles.profileButton}>
        {/* Using static image for now, replace with actual user PFP later. */}
        <img src={PFP} alt="Profile picture" />
      </button>
    </div>
  )
}

export default Header
