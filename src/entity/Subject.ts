import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Course } from "./Course";

@Entity()
export class Subject{
    @PrimaryColumn()
    courseId!: string;

    @Column()
    name!: string;

    @ManyToOne(()=>Course, (course)=>course.subjects)
    course!: Course; 

}

// User Photos
// 1 User many photos

// Course Subjects
// 1 Course many subjects