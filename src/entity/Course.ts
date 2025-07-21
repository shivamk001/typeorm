import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Student } from "./Student";
import { Subject } from "./Subject";

@Entity()
export class Course{
    @PrimaryColumn()
    courseId!: string;

    @Column()
    name!: string;

    @OneToMany(()=>Student, (student)=>student.course)
    students!: Course[];

    @OneToMany(()=>Subject, (subject)=>subject.course)
    subjects!: Subject[];

    @Column()
    duration!: number;
}

// User Photos
// 1 User many photos

// Course Subjects
// 1 Course many subjects