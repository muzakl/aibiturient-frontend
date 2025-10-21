import styles from './LandingPage.module.css'

const LandingPage = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.hero}>
        <h1>
          Welcome to <span>AI</span>Biturient!
        </h1>
        <p>
          AIBiturient თქვენი ჭკვიანი, პერსონალიზებული სასწავლო თანამგზავრია,
          რომელიც შექმნილია იმისთვის, რომ დაგეხმაროთ საქართველოს ეროვნული
          გამოცდებისთვის თავდაჯერებულად მომზადებაში. ჩვენ ვაერთიანებთ ხელოვნური
          ინტელექტის ძალას დადასტურებულ სასწავლო ტექნიკასთან, რათა
          გამოცდებისთვის მომზადება უფრო მარტივი, სწრაფი და ეფექტური გავხადოთ.
        </p>
      </div>
    </div>
  )
}

export default LandingPage
