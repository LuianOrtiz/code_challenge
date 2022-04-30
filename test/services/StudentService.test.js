const Student = require("../../lib/models/Student");
const StudentService = require("../../lib/services/StudentService");

describe(` Test to Student Service`, () => {

    test(`1. get all Students`, () => {
        const students = [ {name: "Angel", certificate: true}, {name: "Maria", certificate: false }];
        const objStudent = StudentService.allStudents(students);
        expect(objStudent[0].name).toBe("Angel");
    });

    test(`2. get the email of all students have certification`, () => {
        const students = [ {name: "Angel", email: "angel@gmail.com", haveCertification: true}, 
                            {name: "Maria", email: "maria@gmail.com", haveCertification: false },
                            {name: "Juan", email: "juan@gmail.com", haveCertification: true }];
        const state = true;
        const studentEmail = StudentService.certifiedStudentsMail(students, state);
        expect(studentEmail[0]).toBe("angel@gmail.com");
        
    });

    test(`3. get all students that have more than 500 credits`, () => {
        const students = [ {name: "Angel", credits: 46}, {name: "Maria", credits: 590 },{name: "Juan", credits: 30 }, {name: "Juan", credits: 890 }];
        const credits = 500;
        const studentsCredit = StudentService.filterStudentByCredits(students, credits)
        
        expect(studentsCredit[0].credits).toBe(590)
    });

});