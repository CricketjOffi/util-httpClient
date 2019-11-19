/*
 * Author: Neela Krishna Teja Tadikonda
 */
const https = require('https');

exports = {
    post: (URL, body) => {
        return new Promise((resolve, reject) => {
            https.post(URL, body ,(resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
      resolve(JSON.parse(data));
  });

}).on("error", (err) => {
  reject(err)
});
        });
    }
}