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
        this.numberOfStudents++;
    }
    dropStudent(drop) {
        this.students = this.students.filter(element => element !== drop);
        this.numberOfStudents--;
    }
    getStudents() {
        return this.students.join(', ');
    }
    getNumberOfStudents() {
        return this.numberOfStudents;
    }
    findStudent(findStudent) {
        if (this.students.includes(findStudent))  
            return findStudent; 
        return 'Student not found';
    }
}
const mern = new Course('mern', ['Aslamjon', 'Doston', 'Bekzod'], 3);

mern.addStudent('Muhammad')
console.log(mern.getStudents());
mern.dropStudent('Doston')
console.log(mern.getStudents());
console.log(mern.findStudent('Aslamjon'));