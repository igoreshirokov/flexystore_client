const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'flexystore.ru', 'api.flexystore.ru'],
  },
}
