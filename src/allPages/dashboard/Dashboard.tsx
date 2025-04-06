"use client";
import React from "react";
import styles from "./Dashboard.module.css";
import { PieChartComponent } from "@/components/pieChart/PieChartComponent";
import "@/allPages/dashboard/Dashboard";

// declare namespace JSX {
//   interface IntrinsicElements {
//     button: React.DetailedHTMLProps<
//       React.ButtonHTMLAttributes<HTMLButtonElement>,
//       HTMLButtonElement
//     >;
//   }
// }

const Dashboard = () => {
  return (
    <div className={`${styles.dashMain}`}>
      
        <div className={`${styles.dashContent}`}>
          <PieChartComponent />
        </div>
        <div className={`${styles.dashWrites} `}>
          <h1>Heading</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            alias eveniet fuga quaerat voluptas sint nesciunt minus cumque,
            consectetur repellendus est delectus eum, laboriosam veritatis ullam
            dolor maiores cum. Consequ Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Tempora rem quasi excepturi provident repellat
            sint explicabo, inventore aperiam enim nisi nemo quibusdam! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Provident quas
            iure similique mollitia cumque illum harum reprehenderit officia
            aliquid facere!
          </p>
          <div className={styles.dashButtons}>
            <button>Dashboard</button>
            <button>Redirect</button>
          </div>
        </div>
      
    </div>
  );
};

export default Dashboard;
