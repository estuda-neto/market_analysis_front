import React from "react";
import styles from "./tikerleft.module.css";
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";

type TikerObject = {
  kpiIsNegative: boolean;
  message: string;
};

type TikerLeftProps = {
  TikerList?: TikerObject[];
};

export const TikerLeft: React.FC<TikerLeftProps> = ({
  TikerList = [
    { kpiIsNegative: true, message: "45 empresas em caindo" },
    { kpiIsNegative: false, message: "500 novos produtos #2" },
    { kpiIsNegative: false, message: "5000 vendas em 2025 #3" },
  ],
}) => {
  return (
    <div className={styles.tickerWrapper} data-testid="ticker-wrapper">
      <div className={styles.ticker}>
        {TikerList.map((item, index) => (
          <div key={index} className={styles.tichercontainer}>
            {item.kpiIsNegative ? (
              <>
               <TrendingDownIcon size={24} color="red" data-testid="down-icon" />
                <span className={styles.tickerItem} data-testid="ticker-item">{item.message}</span>
              </>
            ) : (
              <>
                <TrendingUpIcon size={24} color="#00FF33"  data-testid="up-icon" />
                <span className={styles.tickerItem}  data-testid="ticker-item">{item.message}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
