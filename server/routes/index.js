import AuthRouter from './authroute';
import UserRouter from './userroute';
import CourseRouter from './courseroute';
import AssignmentRouter from './assignmentroute';
import TeacherRouter from './teacherroute';
import TeacherByUserRouter from './teacherbyuserroute';

//exporting the needed routes
export default (app) => {
    app.use('/auth', AuthRouter );
    app.use('/users', UserRouter );
    app.use('/courses', CourseRouter );
    app.use('/assignments', AssignmentRouter );
    app.use('/teachers', TeacherRouter );
    app.use('/user/teacher', TeacherByUserRouter );
}
