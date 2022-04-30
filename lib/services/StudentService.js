const Student = require("./../models/Student");

class StudentService{
    
    /**
     * 
     * @param {Student} students 
     * @returns Student's List
     */
    static allStudents(students){
        return students;
    }

    /**
     * 
     * @param {Student} students 
     * @param {boolean} state 
     * @returns Student's Email
     */
    static certifiedStudentsMail(students, haveCertification){
        const studentWithCertification = students.filter((student) => student.haveCertification == haveCertification);
        const studentEmail = studentWithCertification.map((student) => student.email);
        return studentEmail;
    }

    /**
     * 
     * @param {Student} students 
     * @param {number} credits 
     * @returns student's credits
     */
    static filterStudentByCredits(students, credits){
        const studentsWithCredits = students.filter((student) => student.credits > credits);
        return studentsWithCredits;
    }
}
module.exports = StudentService;