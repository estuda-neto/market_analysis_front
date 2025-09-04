import {BanknoteIcon, EyeIcon, MessageCircleMoreIcon, SearchIcon, ShoppingCartIcon} from "lucide-react";
import styles from "./manager.module.css";
import Image from "next/image";

export default function Manager() {
  const customers = [
    { name: "David", country: "Italy" },
    { name: "Amit", country: "India" },
    { name: "David", country: "Italy" },
    { name: "Amit", country: "India" },
    { name: "David", country: "Italy" },
    { name: "Amit", country: "India" },
    { name: "David", country: "Italy" },
    { name: "Amit", country: "India" },
  ];

  return (
    <div className={styles.container} style={{width:"100%",height:"100%"}}>
      {/* Main */}
      <div className={`${styles.main} ${styles.active}`}>
        <div className={styles.topbar}>
          <div className={styles.search}>
            <label>
              <input type="text" placeholder="Search here" />
              <SearchIcon size={28} className={styles.ioncon}/>
            </label>
          </div>

          <div className={styles.user}>
            <Image  src="/images/man.jpg"   width={40}  height={40}  alt="user" />
          </div>
        </div>

        {/* Cards */}
        <div className={styles.cardBox}>
          <div className={styles.card}>
            <div>
              <div className={styles.numbers}>1,504</div>
              <div className={styles.cardName}>Daily Views</div>
            </div>
            <div className={styles.iconBx}>
              <EyeIcon size={28} />
            </div>
          </div>

          <div className={styles.card}>
            <div>
              <div className={styles.numbers}>80</div>
              <div className={styles.cardName}>Sales</div>
            </div>
            <div className={styles.iconBx}>
              <ShoppingCartIcon size={28} />
            </div>
          </div>

          <div className={styles.card}>
            <div>
              <div className={styles.numbers}>284</div>
              <div className={styles.cardName}>Comments</div>
            </div>
            <div className={styles.iconBx}>
              <MessageCircleMoreIcon size={28} />
            </div>
          </div>

          <div className={styles.card}>
            <div>
              <div className={styles.numbers}>$7,842</div>
              <div className={styles.cardName}>Earning</div>
            </div>
            <div className={styles.iconBx}>
              <BanknoteIcon size={28} />
            </div>
          </div>
        </div>

        {/* Recent Customers */}
        <div className={styles.recentCustomers}>
          <div className={styles.cardHeader}>
            <h2>Recent Customers</h2>
          </div>

          <table>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index}>
                  <td width="60px">
                    <div className={styles.imgBx}>
                      <Image src="/images/man.jpg"  width={50} height={50} alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      {customer.name} <br /> <span>{customer.country}</span>
                    </h4>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
