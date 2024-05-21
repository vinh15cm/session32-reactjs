"use strict";
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.enrolledCourses = [];
    }
    enroll(course) {
        this.enrolledCourses.push(course);
    }
}
class Instructor {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    createCourse(title) {
        return new Course(title, this);
    }
    createLesson(course, title) {
        course.addLesson(title);
    }
    createAssignment(lesson, assignmentTitle) {
        lesson.addAssignment(assignmentTitle);
    }
}
class Course {
    constructor(title, instructor) {
    }
}
