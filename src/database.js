import { Pool } from "pg";

export const pool = new Pool({
    host: 'ec2-54-158-247-210.compute-1.amazonaws.com',
    user: 'gfftgnqnjrbtdj',
    password: 'e7af3d2f59861fbd52be30ced8cc3340b2fe871f4742166deed2ab936047ddac',
    database: 'd2kn6f4htd8kem',
    port: 5432,
    ssl: {rejectUnauthorized:false}
});


