const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const userRoute = require("./routes/userRoute");
const businessesRoute = require("./routes/businessesRoute");
const businessRoute = require("./routes/businessRoute");

app.use(cors());
app.use(bodyParser.json());

app.use("/users", userRoute);
app.use("/businesses", businessesRoute);
app.use("/business", businessRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`connected to port ${PORT}`);
});
