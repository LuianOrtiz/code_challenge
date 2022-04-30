const StudentService = require("../services/StudentService");
const Reader = require("../utils/Reader");

class StudentController{
    
    static getStudents(){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.allStudents(students);
    }

}
module.exports = StudentController;