import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Subject } from "./Subject";

@Entity()
export class Course{
    @PrimaryColumn()
    courseId!: string;

    @Column()
    name!: string;

    @Column()
    duration!: number;

    @ManyToMany(()=>Subject, (subject)=>subject.courses)
    @JoinTable()
    subjects!: Subject[]
}

// User Photos
// 1 User many photos

// Course Subjects
// 1 Course many subjects