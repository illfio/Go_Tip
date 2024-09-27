import styles from "./splash.module.scss";
import Navbar from "../../components/Navbar";
import { categories } from "./splashObj";

export default function Splash() {
  return (
    <div className={styles.splashPageDiv}>
      <Navbar />
      <div className={styles.heroSection}>
        <img src="/images/SplashPage/leftHero.png" alt="left-hero-banner" />
        <div className={styles.heroSectionContent}>
          <div className={styles.heroSectionSmallHeaderDiv}>
            <img src="/images/SplashPage/cutlery 1.png" />
            <p>A NEW WAY TO TIP</p>
            <img src="/images/SplashPage/cutlery 2.png" />
          </div>
          <h1 className={styles.heroSectionBigHeader}>
            Tip Smarter, Feel Better
          </h1>
          <div className={styles.heroSectionSearchInputDiv}>
            <input type="text" placeholder='Try something like... "KBBQ"' />
            <img
              className={styles.heroSectionSearchImage}
              src="/images/SplashPage/search-normal.png"
            />
            <button className={styles.heroSectionSearchButton}>Search</button>
          </div>
          <div className={styles.heroSectionSearchCategories}>
            {categories.map((item) => (
              <div className={styles.heroSectionCategoriesItemDiv}>
                <p>{item.type}</p>
              </div>
            ))}
          </div>
        </div>
        <img src="/images/SplashPage/rightHero.png" alt="right-hero-banner" />
      </div>
      <div className={styles.storySection}>
        <div className={styles.storyImageDiv}>
          <img src="/images/SplashPage/our-story-image.png" />
        </div>
        <div className={styles.storyContent}>
          <div className={styles.storyContentHeaders}>
            <p className={styles.storyContentSmallHeader}>Our Story</p>
            <h1 className={styles.storyContentBigHeader}>
              Why we created <br />
            </h1>
            <div className={styles.storyContentBiggerHeaderDiv}>
              <h3 className={styles.storyContentBrandHeader}>GoTip</h3>
              <img
                className={styles.storyContentBrandHeaderEmphasis}
                src="/images/SplashPage/Vector.png"
              />
            </div>
          </div>
          <div className={styles.storyContentBio}>
            <p>
              At GoTip, we believe that everyone deserves to be treated fairly.
              That's why we created this app to revolutionize the tipping
              experience for restaurant workers. Our mission is to provide a
              transparent and secure platform that ensures workers receive their
              tips promptly and efficiently.
              <br />
              <br />
              We are committed to providing exceptional customer service and
              ensuring the highest level of security for our users. Our goal is
              to make a positive impact on the lives of restaurant workers and
              customers alike.
            </p>
          </div>
          <button className={styles.storyContentButton}>Get Started Now</button>
        </div>
      </div>
    </div>
  );
}
