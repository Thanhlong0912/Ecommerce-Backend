const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const genneralAccessToken = async (payload) => {
  const access_token = jwt.sign(
    {
      //   ...payload,
      payload,
    },
    process.env.ACCESS_TOKEN,
    { expiresIn: "30s" }
  );

  return access_token;
};

const genneralRefreshToken = async (payload) => {
  const access_token = jwt.sign(
    {
      //   ...payload,
      payload,
    },
    process.env.REFRESH_TOKEN,
    { expiresIn: "365d" }
  );

  return access_token;
};

module.exports = {
  genneralAccessToken,
  genneralRefreshToken,
};
