class Student {
    id: number;
    name: string;
    enrolledCourses: Course[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.enrolledCourses = [];
    }

    enroll(course: Course): void {
        this.enrolledCourses.push(course);
    }
}
class Instructor {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    createCourse(title: string): Course {
        return new Course(title, this);
    }
    createLesson(course: Course, title: string): void {
        course.addLesson(title)
    }
    createAssignment(lesson: Lesson, assignmentTitle: string): void {
        lesson.addAssignment(assignmentTitle);
    }
}
class Course {
    title: string;
    instructor: Instructor;
    lesson: Lesson[];
    assessment: string[];

    constructor(title: string, instructor: Instructor) {

    }
}

