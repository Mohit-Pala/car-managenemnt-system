const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'car-managenemnt-system',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

