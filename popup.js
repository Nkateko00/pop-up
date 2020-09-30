module.exports = function () {


    const pg = require("pg");
    const Pool = pg.Pool;
    const connectionString = process.env.DATABASE_URL || 'postgresql://kagiso:123@localhost:5432/popup';
    const pool = new Pool({
        connectionString
    });


    //adds city selected to database 
    async function addCity(city) {

        const checking = await pool.query(`select id from popup where reqion = $1`, [city])
        if (checking.rowCount === 0) {
            await pool.query(`insert into popup (region, counter) values ($1, 0)`, [city]);
        }
        await pool.query(`update popup set counter = counter+1 where item = $1`, [city])
    }

    //select town
   





        000000001             0*//+/////98+9+0
        3
        +9
    }


    return {
        selectTown,
        addCity

    }


}

// `select * distict type from popup where reqion = 'cpt'`

