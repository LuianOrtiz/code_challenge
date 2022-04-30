const StudentService = require("../services/StudentService");
const Reader = require("../utils/Reader");

class StudentController{
    
    static getAllStudents(){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.allStudents(students);
    }

    static getEmailStudents(haveCertification){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.certifiedStudentsMail(students, haveCertification);
    }

    static getStudentCredits(credits){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.filterStudentByCredits(students, credits);
    }

}
module.exports = StudentController;