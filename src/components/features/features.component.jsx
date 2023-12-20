import styles from "./features.module.css";

const features = [
  {
    class: "fas fa-users-cog",
    title: "La Russe",
    text: "У нас вы увидите коллекции в классическом стиле и в стилистике a la Russe. Мы используем в работе шерсть, кашемир, бархат, другие ткани высокого качества, а также настоящие павлопосадские платки.",
  },
  {
    class: "fas fa-hands-helping",
    title: "Лучший мех",
    text: "Мех соболя, норки, куницы, песца, лисы мы закупаем на лучших пушных аукционах мира, поэтому уверены в сертификации сырья для пошива одежды. Вкупе с исключительным профессионализмом наших мастеров это позволяет гарантировать качество наших изделий.",
  },
  {
    class: "fas fa-mobile-alt",
    title: "Богатый выбор одежды",
    text: "У нас богатый выбор одежды, головных уборов и аксессуаров. Подходящие модели найдут для себя самые разные женщины – от домохозяйки до бизнес-леди.",
  },
  {
    class: "fas fa-cloud-upload-alt",
    title: "Купить меховую одежду",
    text: "Купить меховую одежду можно в нашем интернет-магазине меховых изделий от производителя. Выбранные покупателями модели отправляем в различные города всего мира.",
  },
];

const FeaturesComponent = () => {
  const showFeaturesEl = () => {
    return features.map((el) => (
      <div className={styles.featureContainer} key={el.text}>
        <div className={styles.featureIcon}>
          <i className={el.class}></i>
        </div>
        <div className={styles.featureHeader}>
          <p>{el.title}</p>
        </div>
        <div className={styles.featureDescription}>
          <p>{el.text}</p>
        </div>
      </div>
    ));
  };

  return (
    <div id="features" className={styles.container}>
      <div className={styles.header}>
        <h1>Меховая женская одежда: наш ассортимент</h1>
        <div className={styles.line} />
      </div>
      <div className={styles.features}>{showFeaturesEl()}</div>
    </div>
  );
};

export default FeaturesComponent;
