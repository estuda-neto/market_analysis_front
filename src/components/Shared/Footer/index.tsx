import clsx from "clsx";
import styles from "./styles.module.css";

export const Footer: React.FC = () => {

  return (
    <footer className={clsx(styles.footer)}>
      <div className={styles.footerContent}>
        {/* Coluna 1 */}
        <div>
          <h3>CIDADES</h3>
          <a href="#">Caíco,RN</a>
          <a href="#">Sâo João do Sabugi,RN</a>
          <a href="#">Ipueira,RN</a>
          <a href="#">São Mamede,PB</a>
          <a href="#">Patos,PB</a>
        </div>

        {/* Coluna 2 */}
        <div>
          <h3>REDES SOCIAIS</h3>
          <a href="#">Youtube</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>

        {/* Coluna 3 */}
        <div>
          <h3>CONTACT</h3>
          <a href="mailto:contact.laboiserie@gmail.com">
            clodoaldobritodev@gmail.com
          </a>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.footerBottom}>
        Developed by <a href="https://github.com/estuda-neto" target="_blank" rel="noopener noreferrer">Neto</a>
      </div>
    </footer>
  );
};
