import styles from './Card.module.css';
import Link from "next/link";
const ProjectCards = () => {
  const cardData = [
    { title: 'Website Idea Generate', image: 'https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/port-3-1.jpg' },
    { title: 'App Concept Design', image: 'https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/port-3-2.jpg' },
    { title: 'E-commerce Site Plan', image: 'https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/port-3-3.jpg' },
    { title: 'Logo Design Process', image: 'https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/port-3-4.jpg' },
    { title: 'Business Website Design', image: 'https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/port-3-5.jpg' },
    { title: 'Portfolio Building', image: 'https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/port-3-6.jpg' }
  ];
  return (
    <div className="container my-5">
      <div className="row">
        {cardData.map((card, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className={`card bg-dark text-white ${styles.card}`}>
              <div className={styles.imageContainer}>
                <img
                  src={card.image}
                  className={`card-img-top ${styles.image}`}
                  alt={card.title}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{card.title}</h5>
                <Link href="#" className={`bg-orange-600 ${styles.button}`}>
                  Case Studies <span className={styles.arrow}>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
