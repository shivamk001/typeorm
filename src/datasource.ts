import { DataSource } from "typeorm";

const datasource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "myuser",
    password: "mypassword",
    database: "mydb",
    synchronize: true,
    logging: false
})