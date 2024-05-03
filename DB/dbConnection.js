const sql = require('mssql')

const sqlConfig = {
    user: 'rakesh' ,            //inputData.userName,               //'rakesh',
    password: 'Rakesh@1997',       //inputData.password,           //'rakeshpk',
    database:'mail',             // inputData.databaseName,       //'emp',
    server:'DESKTOP-Q9876M9'  ,    // inputData.hostName,             //'DESKTOP-Q9876M9',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false,
        trustServerCertificate: false
    }
}

async function connectToDB() {
    try {
        await sql.connect(sqlConfig);
        console.log('Connected to MSSQL DataBase');
    } catch (err) {
        console.error('Error connecting to MSSQL:', err);
    }
}

module.exports = { connectToDB, sql };