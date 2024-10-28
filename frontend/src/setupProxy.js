const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://backend.default.svc.cluster.local:8080",
      pathRewrite: { "^/api": "" }
    })
  );
};
// ##http://service.namespace.svc.cluster.local:PORT##
