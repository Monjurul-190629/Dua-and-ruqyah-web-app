const Database = require('better-sqlite3');

// define the path

const dbPath = './dua_main.sqlite';


// Now connection of Database

let db;

try{
    db = new Database(dbPath, {
        verbose : console.log    // logs all sql queries to the console
    })
    console.log('sqlite is connected successfully')
}
catch(err){
    console.log('Failed to connect with database', err.message)
}

module.exports = db;