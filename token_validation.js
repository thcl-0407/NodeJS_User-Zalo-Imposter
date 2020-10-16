const jwt = require("jsonwebtoken");
module.exports = {

  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      token = token.slice(7);
      jwt.verify(token, 'imposter', (err, decoded) => {
        if (err) {
          return res.json({
            success: 0,
            message: "Không hợp lệ"
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.json({
        success: 0,
        message: "Quyền truy cập bị từ chối"
      });
    }
  }
};
