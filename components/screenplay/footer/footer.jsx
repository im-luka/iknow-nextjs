import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.ftr}>
      <div className={styles.footer}>
        <p>Questions? Contact us.</p>

        <div className={styles.footer__container}>
          <div className={styles.footer__container__items}>
            <p>FAQ</p>
            <p>Investor Relations</p>
            <p>Privacy</p>
            <p>Speed Test</p>
          </div>
          <div className={styles.footer__container__items}>
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
            <p>Legal Notices</p>
          </div>
          <div className={styles.footer__container__items}>
            <p>Account</p>
            <p>Ways to Watch</p>
            <p>Corporate Information</p>
            <p>Only on iWATCH</p>
          </div>
          <div className={styles.footer__container__items}>
            <p>Media Center</p>
            <p>Terms of Use</p>
            <p>Contact Us</p>
          </div>
        </div>

        <select>
          <option>English</option>
          <option>Croatian</option>
        </select>

        <p>iWATCH Croatia</p>
      </div>
    </footer>
  );
};

export default Footer;
