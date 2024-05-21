"use strict";
class Students {
    constructor(studentId, studentName) {
        this.id = studentId;
        this.name = studentName;
        this.enrolledCourses = [];
    }
    enroll(course) {
        this.enrolledCourses.push(course);
    }
}
class Instructor1 {
    constructor(instructorId, instructorName) {
        this.id = instructorId;
        this.name = instructorName;
    }
    createCourse(title) {
        return new Course(title, this);
    }
    createLesson(course, title) {
        course.addLesson1(title);
    }
    createAssignment(lesson, assignmentTitle) {
        lesson.addAssignment(assignmentTitle);
    }
    createAssessment(course, assessmentTitle) {
        course.addAssessment1(assessmentTitle);
    }
}
class Course1 {
    constructor(title, instructor) {
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assessments = [];
    }
    addLesson(title) {
        this.lessons.push(new Lesson(title));
    }
    addAssessment(assessmentTitle) {
        this.assessments.push(assessmentTitle);
    }
}
class Lesson {
    constructor(title) {
        this.title = title;
        this.assignments = [];
    }
    addAssignment(assignmentTitle) {
        this.assignments.push(assignmentTitle);
    }
}
// Tạo các thực thể để kiểm tra
const instructor = new Instructor(1, "John Doe");
const course = instructor.createCourse("Mathematics");
instructor.createLesson(course, "Algebra");
instructor.createLesson(course, "Geometry");
const student = new Student(101, "Alice");
student.enroll(course);
console.log(student.enrolledCourses); // Output: [Course { title: 'Mathematics', ... }]
