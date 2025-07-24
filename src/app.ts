import express, { Request, Response, NextFunction } from 'express';
import AppDatasource from './datasource';
import { Course } from './entity/Course';
import { Student } from './entity/Student';
import { Subject } from 'typeorm/persistence/Subject';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

const app = express();

let CourseRepository=AppDatasource.getRepository(Course);

let StudentRepository=AppDatasource.getRepository(Student);

let SubjectRepository=AppDatasource.getRepository(Subject);

app.get('/course', (req: Request, res: Response)=>{

});

app.post('/course', async (req: Request, res: Response)=>{
    let {courseId, name, duration } = req.body;
    
    await CourseRepository
        .createQueryBuilder()
        .insert()
        .values([
            { courseId, name, duration}
        ])
        .execute();
});

app.delete('/course/:id', (req: Request, res: Response)=>{
    
})

app.get('/students', (req: Request, res: Response)=>{
    
});

app.post('/students', async (req: Request, res: Response)=>{
    let { studentId, firstName, lastName, year, courseId } = req.body;

    // get the course first 
    let course=await CourseRepository.findOneBy({courseId});

    if(course){
        await StudentRepository
            .createQueryBuilder()
            .insert()
            .values([
                { studentId, firstName, lastName, year, course}
            ])
            .execute();
    }

});

app.delete('/students/:id', (req: Request, res: Response)=>{
    
});

app.get('/subjects', (req: Request, res: Response)=>{
    
});

app.post('/subjects', async (req: Request, res: Response)=>{
    let { subjectId, name, courseId } = req.body;

    // get the course first 
    let course=await CourseRepository.findOneBy({courseId});

    await SubjectRepository
        .createQueryBuilder()
        .insert()
        .values([
            { subjectId, name, course } as QueryDeepPartialEntity<Subject>
        ])
        .execute();
});

app.delete('/subjects/:id', (req: Request, res: Response)=>{
    
});

export default app;