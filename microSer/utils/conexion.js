const mysql= require('mysql');
/* poll de conexiones */

const pool= mysql.createPool({
host: 'localhost',
port:'3306',
user:'root',
password:'admon',
database:'banco'
});

exports.pool= pool;
