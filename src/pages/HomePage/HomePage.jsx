import Header from '../../components/Header/Header'
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.contentDiv}>
        <Header />
        <div className={styles.welcomeSection}>
          <h2>
            {/* Change user with actual user data later. */}
            Welcome back, <span>Rasmus</span>!
          </h2>
          <p>We're glad to see you again! Jump right back where you left off</p>
        </div>
        <div className={styles.lessonsSection}>
          <div className={styles.lessonCard}>
            <h1>🇬🇪 Georgian Language & Literature</h1>
          </div>
          <div className={styles.lessonCard}>
            <h1>🧮 Mathematics</h1>
          </div>
          <div className={styles.lessonCard}>
            <h1>🧬 Biology</h1>
          </div>
          <div className={styles.lessonCard}>
            <h1>⚗️ Chemistry</h1>
          </div>
          <div className={styles.lessonCard}>
            <h1>🧲 Physics</h1>
          </div>
          <div className={styles.lessonCard}>
            <h1>🇬🇧 English Language</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
