const sqlite = require("sqlite3").verbose();

export const db = new sqlite.Database("./db/kinetisDatabase.db",sqlite.OPEN_READWRITE, (err:any) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the chinook database.');
});

export default db