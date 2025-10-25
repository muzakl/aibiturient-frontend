import { useState } from 'react'
import Header from '../../components/Header/Header'
import styles from './LessonPage.module.css'

const LessonPage = () => {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <div className={styles.mainDiv}>
      <div className={styles.contentDiv}>
        <Header />
        {/* Replace with dynamic lesson content based of URL later. */}
        <h1 className={styles.lessonTitle}>
          🇬🇪 Georgian Language & Literature
        </h1>
        <div className={styles.lessonHolder}>
          <div className={styles.lessonTabHolder}>
            <h2
              onClick={() => setActiveTab(1)}
              className={`${activeTab === 1 ? styles.active : ''}`}
            >
              Chat
            </h2>
            <h2
              onClick={() => setActiveTab(2)}
              className={`${activeTab === 2 ? styles.active : ''}`}
            >
              Hello
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LessonPage
