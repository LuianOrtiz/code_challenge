const StudentController = require("./controllers/StudentController");
const express = require("express");
const { urlencoded } = require("express");
const app = express();
app.use(express.json());
const port = 3000;


app.get("/", (request, response) => {
    response.json({
        message: "Students Api welcome!",
        students: 'http://localhost:3000/v1/students',
        studentsEmail: 'http://localhost:3000/v1/students/emails',
        studentsCredits: 'http://localhost:3000/v1/students/credits'
    });
});

app.get('/v1/students', (request, response) => {
    const students = StudentController.getAllStudents();
    response.json(students);
});

app.get('/v1/students/emails', (request, response) => {
    const haveCertification = true;
    const studentsEmail = StudentController.getEmailStudents(haveCertification);
    response.json(studentsEmail);
})

app.get('/v1/students/credits', (request, response) => {
    const credits = 500;
    const studentsCredits = StudentController.getStudentCredits(credits);
    response.json(studentsCredits);
})

app.listen(port, () => {
    console.log(`Students API in localhost: ${port}`);
});