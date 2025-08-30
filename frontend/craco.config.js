// craco.config.js
module.exports = {
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    // Use 'all' to accept any, or list your exact hosts:
    // allowedHosts: ['ec2-XX-XX-XX-XX.ap-southeast-2.compute.amazonaws.com', 'XX.XX.XX.XX']
    allowedHosts: 'ec2-16-176-16-115.ap-southeast-2.compute.amazonaws.com',
  },
};
