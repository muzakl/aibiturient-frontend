import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.headerDiv}>
      <h1 className={styles.headerText}>
        <span className={styles.headerSpan}>AI</span>Biturient
      </h1>
      <button className={styles.profileButton}></button>
    </div>
  )
}

export default Header
