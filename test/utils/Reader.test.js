const Reader = require("./../../lib/utils/Reader");
const Student = require("./../../lib/models/Student");

describe(`Testint reader file`, () => {

    test(` 1. read json file`, () => {
        const students = "visualpartners.json"
        const fileStudents = Reader.readJsonFile(students);
        console.log(fileStudents);
        expect(fileStudents).not.toBeNull();
    });

    test(` 2. match with Student Class`, () => {
        const students = "visualpartners.json"
        const fileStudents = Reader.readJsonFile(students);
        const student = new Student(fileStudents[0])
        expect(student).toBeInstanceOf(Student);
    })
})