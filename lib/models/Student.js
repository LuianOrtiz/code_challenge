
class Student {
    
    /**
     * 
     * @param {string} id 
     * @param {string} name 
     * @param {string} email 
     * @param {number} credits 
     * @param {string[]} enrollments 
     * @param {number} previousCourses 
     * @param {boolean} haveCertificaction 
     */
    constructor(id, name, email, credits, enrollments, previousCourses, haveCertificaction){
        this.id = id;
        this.name = name;
        this.email = email;
        this.credits = credits;
        this.enrollments = enrollments;
        this.previousCourses = previousCourses;
        this.haveCertificaction = haveCertificaction;
    }
}
module.exports = Student;