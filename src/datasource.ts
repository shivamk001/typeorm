import { DataSource } from "typeorm";
import { Subject } from "typeorm/persistence/Subject";
import { Course } from "./entity/Course";
import { Student } from "./entity/Student";

const AppDatasource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "myuser",
    password: "mypassword",
    database: "mydb",
    synchronize: true,
    logging: false,
    entities: [Subject, Course, Student]
});

export default AppDatasource;