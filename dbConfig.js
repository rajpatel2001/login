/*const { Client } = require("pg")
const dotenv = require("dotenv")
dotenv.config()

const connectDb = async () => {
    try {
        const pool = new Client({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT
        })
 
        await pool.connect()
        //const res = await pool.query(`SELECT * FROM users`)
        //await client.query('INSERT INTO users values(102,\'raj\',\'raj456@gmail.com\',\'123456\')')

       //console.log(res)
        
     
    } catch (error) {
        
        console.log(error)
    }
}
 
connectDb()
module.exports = 'pool';
*/


const { Client } = require('pg');
const dotenv = require("dotenv")
dotenv.config()


const pool = new Client({

    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT

});

pool.connect();

module.exports = { pool };























// exports.pool=pool;
/*require("dotenv").config();

const { Pool } = require("pg");

const isProduction = process.env.NODE_ENV === "production";

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;


const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction
});


module.exports = { pool };

pool.query("INSERT INTO users VALUES('vishwaas','vicky@gmail.com','123456')");
console.log("insert sucessfull !!")

results= pool.query(`SELECT * FROM users`);
    console.log(results.rows);
*/
/*
DB_USER=postgres
DB_PASSWORD=admin
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=postgres

SESSION_SECRET=secret*/
