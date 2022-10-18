require("dotenv").config();

const { createApp } = require("./app");
const { sequelize } = require("./models");

const startServer = async () => {
  const app = createApp();
  const PORT = process.env.PORT;
  await sequelize
    .sync({ force: false })
    .then(() => {
      console.log("Connection success");
    })
    .catch((err) => {
      console.error(err);
    });
  app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
  });
};

startServer();