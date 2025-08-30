// craco.config.js
module.exports = {
  devServer: {
    host: "ec2-3-27-208-10.ap-southeast-2.compute.amazonaws.com",
    port: 8080,
    // Use 'all' to accept any, or list your exact hosts:
    // allowedHosts: ['ec2-XX-XX-XX-XX.ap-southeast-2.compute.amazonaws.com', 'XX.XX.XX.XX']
    allowedHosts: 'all',
  },
};
