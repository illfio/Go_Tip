import styles from "./businesses.module.scss";
import React, { useState, useEffect } from "react";
import { Button, Paper } from "@mui/material";
import axios from "axios";
import { mountBusiness, dismountBusiness } from "../../features/businessSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Businesses() {
  let [businesses, setBusinesses] = useState([]);
  let { user } = useSelector((state) => state.user);
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const handleGetBusinessInfo = async (bid) => {
    try {
      let workerResult = await axios.get(
        `http://localhost:8080/business/getWorkers/${bid}`
      );

      let businessResult = await axios.get(
        `http://localhost:8080/business/getBusiness/${bid}`
      );

      workerResult = workerResult.data;
      businessResult = businessResult.data;

      // ** still need to handle the state **
      dispatch(
        mountBusiness({
          name: businessResult.business_name,
          address: businessResult.business_address,
          phoneNumber: businessResult.business_phone_number,
          business_image_url: businessResult.business_image_url,
          banner_image_url: "",
          staffAmount: `${workerResult.length}`,
          workers: [...workerResult],
        })
      );

      // dispatch(mountBusiness())
    } catch (error) {
      console.error({ error: error });
    }
  };

  useEffect(() => {
    const getBusinesses = async () => {
      let result = await axios.get("http://localhost:8080/businesses");
      setBusinesses(result.data);
    };

    getBusinesses();
  }, []);

  function BusinessCard({ prop }, index) {
    return (
      <div
        key={index}
        className={styles.businessCardDiv}
        bid={prop.business_id}
      >
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
        <Button
          variant="contained"
          onClick={(e) => {
            handleGetBusinessInfo(e.target.parentNode.attributes.bid.value);
            navigate("/business");
          }}
        >
          View Staff
        </Button>
      </div>
    );
  }

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
