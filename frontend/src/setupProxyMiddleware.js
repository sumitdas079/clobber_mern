const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(proxy("/api/products", { 
    target: "http://127.0.0.1:5000/",
    secure: false
  }));
};