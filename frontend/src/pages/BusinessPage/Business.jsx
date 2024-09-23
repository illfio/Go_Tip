import { useSelector } from "react-redux";
import styles from "./business.module.scss";
import { Button } from "@mui/material";

export default function Business() {
  const { business } = useSelector((state) => state.business);

  return (
    <div>
      <div className={styles.businessInfoDiv}>
        <img src={business.business_image_url} alt="business" />
        <h1>{business.name}</h1>
        <h1>{business.address}</h1>
        <h1>{business.city}</h1>
        <h1>{business.state}</h1>
        <h1>{business.phoneNumber}</h1>
      </div>
      <Workers />
    </div>
  );

  function Workers() {
    return (
      <di className={styles.workersDiv} v>
        {business.workers.map((item, index) => (
          <Worker item={item} key={index} />
        ))}
      </di>
    );
  }

  function Worker({ item }, key) {
    return (
      <div key={key}>
        <div>
          <img src={item.bio_image_url} alt="image" />
          <h1>{item.first_name}</h1>
          <h1>{item.last_name}</h1>
          <h1>{item.role_name}</h1>
        </div>
        <Button variant="contained">Tip</Button>
      </div>
    );
  }

  function Payment() {
    return (
      <div>
        <div></div>
      </div>
    );
  }
}
