const Reader = require("./../../lib/utils/Reader");

describe(`Testint reader file`, () => {

    test(` 1. read json file`, () => {
        const students = "visualpartners.json"
        const fileStudents = Reader.readJsonFile(students);
    
        expect(fileStudents).not.toBeNull();
    })
})