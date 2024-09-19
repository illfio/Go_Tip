import styles from "./businesses.module.scss";
import React, { useState, useEffect } from "react";
import { Button, Paper } from "@mui/material";
import axios from "axios";

export default function Businesses() {
  let [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    const getBusinesses = async () => {
      let result = await axios.get("http://localhost:8080/businesses");
      setBusinesses(result.data);

      console.log(result);
    };

    getBusinesses();
  }, []);

  return (
    <div className={styles.businessesMainDiv}>
      <div className={styles.filterPanel}></div>
      <div className={styles.discoveryPanel}>
        <div className={styles.businessesDiv}>
          {businesses.map((item, index) => (
            <BusinessCard prop={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BusinessCard({ prop }, index) {
  return (
    <div key={index} className={styles.businessCardDiv}>
      <Paper>
        <div className={styles.businessCardImageDiv}>
          <img
            className={styles.businessCardImage}
            src={prop.business_image_url}
            alt=""
          />
        </div>
        <h1>{prop.business_name}</h1>

        <span>
          <p>
            {prop.business_city_name}, {prop.business_state}
          </p>
        </span>
      </Paper>
      <Button variant="contained">View Staff</Button>
    </div>
  );
}
