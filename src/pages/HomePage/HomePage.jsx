import Header from '../../components/Header/Header'
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.contentDiv}>
        <Header />
      </div>
    </div>
  )
}

export default HomePage
