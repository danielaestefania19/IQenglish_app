import {createPool} from 'mysql2/promise'


export const pool = createPool({
    host: 'localhost',
    user: 'alfredo',
    password: '26102005',
    database: 'iqenglishdb'
})


