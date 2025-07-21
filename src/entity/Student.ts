import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Course } from "./Course";
import { Subject } from "typeorm/persistence/Subject";

@Entity()
export class Student{
    @PrimaryColumn()
    rollNo!: string

    @ManyToOne(()=>Course, (course)=>course.students)
    course!: Course

    @Column()
    firstName!: string

    @Column()
    lastName!: string

    @Column()
    year!: number

    // @ManyToMany()


}

// User Photo
// 1 user many photos
// Course Student
// 1 course many students