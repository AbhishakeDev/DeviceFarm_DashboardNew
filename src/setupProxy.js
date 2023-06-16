const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api1', {
      target: 'http://10.20.2.50:7100/', // API endpoint 1
      changeOrigin: true,
      pathRewrite: {
        "^/api1": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/api2', {
      target: 'http://10.20.2.156:7100/', // API endpoint 2
      changeOrigin: true,
      pathRewrite: {
        "^/api2": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/api3', {
      target: 'http://10.20.4.109:7100/', // API endpoint 3
      changeOrigin: true,
      pathRewrite: {
        "^/api3": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/api4', {
      target: 'http://10.20.3.37:7100/', // API endpoint 4
      changeOrigin: true,
      pathRewrite: {
        "^/api4": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/api5', {
      target: 'http://10.20.4.127:7100/', // API endpoint 5
      changeOrigin: true,
      pathRewrite: {
        "^/api5": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/api6', {
      target: 'http://assortment-nlp.qa2-sg.cld/', // API endpoint 5
      changeOrigin: true,
      pathRewrite: {
        "^/api6": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/api7', {
      target: 'http://10.30.1.30/', // API endpoint 5
      changeOrigin: true,
      rejectUnauthorized: false,
      pathRewrite: {
        "^/api7": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
}