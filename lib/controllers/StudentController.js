const StudentService = require("../services/StudentService");
const Reader = require("../utils/Reader");

class StudentController{
    
    /**
     * 
     * @returns all students
     */
    static getAllStudents(){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.allStudents(students);
    }

    /**
     * 
     * @param {boolean} haveCertification 
     * @returns student's email if they have certification
     */
    static getEmailStudents(haveCertification){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.certifiedStudentsMail(students, haveCertification);
    }

    /**
     * 
     * @param {number} credits 
     * @returns students than have more than 'credits'
     */
    static getStudentCredits(credits){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.filterStudentByCredits(students, credits);
    }

}
module.exports = StudentController;