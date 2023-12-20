import styles from './hero.module.css';

export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>с нами зима теплее</p>
      </div>
      <div className={styles.promo}>
        <p>до 17 декабря по коду: <span>Мех</span></p>
        <p className={styles.promoAdditional}>На все меховые изделия до 10% предоставляется последовательно к оплате бонусами 50% по программе лояльности на все шубы и дубленки</p>
      </div>
    </div>
  )
}