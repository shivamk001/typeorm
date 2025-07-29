import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Course } from "./Course";
import { Student } from "./Student";

@Entity()
export class Subject{
    @PrimaryColumn()
    subjectId!: string;

    @Column()
    name!: string;

    @ManyToMany(()=>Course, (course)=>course.subjects)
    courses!: Course[]

    // @ManyToMany(()=>Student)
    // @JoinTable()
    // students!: Student[]
}

// User Photos
// 1 User many photos

// Course Subjects
// 1 Course many subjects