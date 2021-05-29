class Course {
    constructor(courseName, students, numberOfStudents) {
        this.courseName = courseName;
        this.students = students;
        this.numberOfStudents = numberOfStudents;
    }
    getCourseName() {
        return this.courseName;
    }
    addStudent(newStudent) {
        this.students.push(newStudent);
        console.log(`${newStudent} added in Students`);
    }
    dropStudent(drop) {
        this.students.splice(this.students.indexOf(drop), 1);
        console.log(`${drop} droped`);
    }
    getStudents() {
        return this.students.join(', ');
    }
    getNumberOfStudents() {
        return this.numberOfStudents;
    }
}
const mern = new Course('mern', ['Aslamjon', 'Doston', 'Bekzod'], 3);

mern.addStudent('Muhammad')
console.log(mern.getStudents());
mern.dropStudent('Doston')
console.log(mern.getStudents());