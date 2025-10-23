import styles from './LandingPage.module.css'
import { Link } from 'react-router'

const LandingPage = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.hero}>
        <div className={styles.header}>
          <h1>
            Welcome to <span className={styles.headerSpan}>AI</span>Biturient!
          </h1>
          <p>
            AIBiturient-ი თქვენი ჭკვიანი, პერსონალიზებული სასწავლო თანამგზავრია,
            რომელიც შექმნილია იმისთვის, რომ დაგეხმაროთ საქართველოს ეროვნული
            გამოცდებისთვის თავდაჯერებულად მომზადებაში. ჩვენ ვაერთიანებთ
            ხელოვნური ინტელექტის ძალას დადასტურებულ სასწავლო ტექნიკასთან, რათა
            გამოცდებისთვის მომზადება უფრო მარტივი, სწრაფი და ეფექტური გავხადოთ.
          </p>
        </div>
        <div className={styles.pointsDiv}>
          <div className={styles.point}>
            <h3>🧠 ისწავლეთ უფრო ჭკვიანურად</h3>
            <p>
              მიიღეთ მორგებული განმარტებები, სავარჯიშო კითხვები და მყისიერი
              გამოხმაურება ყველა თემაზე.
            </p>
          </div>
          <div className={styles.point}>
            <h3>📘 ყველა საგანი განხილულია</h3>
            <p>
              ქართული ენიდან და ლიტერატურიდან დაწყებული მათემატიკით, ისტორიითა
              და ინგლისურით დამთავრებული.
            </p>
          </div>
          <div className={styles.point}>
            <h3>🎯 თვალი ადევნეთ თქვენს პროგრესს</h3>
            <p>
              აკონტროლეთ თქვენი გაუმჯობესება, დაადგინეთ სუსტი წერტილები და
              ყურადღება გაამახვილეთ იმაზე, რაც ნამდვილად მნიშვნელოვანია.
            </p>
          </div>
          <div className={styles.point}>
            <h3>🤖 AI რეპეტიტორი</h3>
            <p>
              დასვით კითხვები ნებისმიერ დროს და მიიღეთ მკაფიო, დეტალური
              ახსნა-განმარტებები — ისევე, როგორც კერძო მასწავლებლის შემთხვევაში.
            </p>
          </div>
        </div>
        <p className={styles.footerText}>
          დაიწყეთ თქვენი თავგადასავალი დღესვე და მიეცით AIBiturient-ს საშუალება,
          დაგეხმაროთ თქვენი მიზნების თავდაჯერებულად მიღწევაში.{' '}
          <span className={styles.footerSpan}>
            რადგან ყველა სტუდენტი იმსახურებს წარმატების შანსს.
          </span>
        </p>
        <Link to="/home" className={styles.link}>
          შემოგვიერთდით
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
