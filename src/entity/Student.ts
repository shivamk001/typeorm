import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, JoinColumn, ManyToMany } from "typeorm";
import { Course } from "./Course";

@Entity()
export class Student{

    @PrimaryColumn()
    studentId!: string;

    @PrimaryGeneratedColumn('increment')
    rollNo!: string

    @Column()
    firstName!: string

    @Column()
    lastName!: string

    @Column()
    year!: number

    // student will have foreign key of course 
    // @ManyToOne(()=>Course)
    // course!: Course
}

// 1 course many students
// many students 1 course