const jwt = require("jsonwebtoken");

const genneralAccessToken = async (payload) => {
  const access_token = jwt.sign(
    {
      //   ...payload,
      payload,
    },
    // process.env.ACCESS_TOKEN,
    "access_token",
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
    // process.env.ACCESS_TOKEN,
    "refresh_token",
    { expiresIn: "365d" }
  );

  return access_token;
};

module.exports = {
  genneralAccessToken,
  genneralRefreshToken,
};
