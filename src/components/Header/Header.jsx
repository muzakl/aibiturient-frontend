import styles from './Header.module.css'
import PFP from '../../assets/Hojlund.jpg'

const Header = () => {
  return (
    <div className={styles.headerDiv}>
      <h1 className={styles.headerText}>
        <span className={styles.headerSpan}>AI</span>Biturient
      </h1>
      <button className={styles.profileButton}>
        {/* Using static image for now, replace with actual user PFP later. */}
        <img src={PFP} alt="Profile picture" />
      </button>
    </div>
  )
}

export default Header
