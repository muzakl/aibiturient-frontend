import styles from './ChatBox.module.css'

const ChatBox = () => {
  return (
    <div className={styles.chatBox}>
      <div className={styles.messages}>
        <div className={`${styles.message} ${styles.ai}`}>
          Hello, ready to study Georgian Literature today?
        </div>
        <div className={`${styles.message} ${styles.user}`}>Hi!</div>
      </div>
      <div className={styles.inputArea}>
        <input type="text" placeholder="Ask AIBiturient anything..." />
        <button>Send</button>
      </div>
    </div>
  )
}

export default ChatBox
