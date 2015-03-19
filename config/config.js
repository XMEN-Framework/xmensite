/**
 * Environment Configuration File
 *
 * Set environment variables and config values.
 */

var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    fs = require('fs'),
    nconf = require('nconf');

nconf.use('memory');
nconf.argv();
nconf.env(['PORT']);

module.exports = {
    'development': {
        'db': 'mongodb://localhost/xmensite', //example: mongodb://localhost/my-db
        'ROOT': rootPath,
        'PORT': 8000,
        'CONFIG_ROOT': rootPath + '/config',
        'APP_ROOT': rootPath + '/app',
        'PUBLIC_ROOT': rootPath + '/public',
        'app': {
            'name': 'XMEN Framework Site - DEVELOPMENT',
            'url': 'http://localhost:8000'
        },
        'useSSL': false,
        'sslKeyPath': '',
        'sslCertPath': '',
        'sslCAPath': '',
        'sslRootPath': '',
        'sslPassphrase': ''
    },
    'production': {
        'db': 'mongodb://localhost/xmensite', //example: mongodb://localhost/my-db
        'ROOT': rootPath,
        'CONFIG_ROOT': rootPath + '/config',
        'APP_ROOT': rootPath + '/app',
        'PUBLIC_ROOT': rootPath + '/public',
        'PORT': 80,
        'app': {
            'name': 'XMEN Framework',
            'url': 'http://xmen.io'
        },
        'useSSL': false,
        'sslKeyPath': '',
        'sslCertPath': '',
        'sslCAPath': '',
        'sslRootPath': '',
        'sslPassphrase': ''
    }
};
