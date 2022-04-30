const StudentController = require("../../lib/controllers/StudentController");

describe(`Test to Student Controller`, () => {

    test(`1. get All Students`, () => {
        const students = StudentController.getAllStudents();
        expect(students).not.toBeUndefined();
    });

    test(`2. get all student's email than have certification`, () => {
        const haveCertification = true
        const studentEmail = StudentController.getEmailStudents(haveCertification);
        const regex = [
            expect.stringMatching(/^\w+([\.-]?\w+)@visualpartnership.xyz$/)
        ]
       expect(studentEmail).toEqual(
            expect.arrayContaining(regex)
        );
    });

    test(`3. get credit's students > 500`, () => {
        const credits = 500;
        const creditStudents = StudentController.getStudentCredits(credits);
        expect(creditStudents[0].credits).toBe(508);
    })
});