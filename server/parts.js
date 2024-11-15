const mariadb = require("mariadb");



async function connect() {
    try {
    const conn = await mariadb.createConnection({
        host: "blitz.cs.niu.edu",
        user: "student",
        password: "student",
        database: "csci467",
    });
    console.log("connected!");
    return conn;
    } catch (err) {
    console.log("not connected due to error: " + err);
    }
}

module.exports = {
    getAll: async (result) => {
        let connection
        try{
            connection = await connect();
            const parts = await connection.query("SELECT * FROM parts");
            result(parts);
        }catch(err){
            console.log("error: " + err);
        }finally{
            if(connection) connection.end();
        }
    },
};