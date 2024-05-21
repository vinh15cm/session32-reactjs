class Students {
    id: number;
    name: string;
    enrolledCourses: Course[];

    constructor(studentId: number, studentName: string) {
        this.id = studentId;
        this.name = studentName;
        this.enrolledCourses = [];
    }

    enroll(course: Course): void {
        this.enrolledCourses.push(course);
    }
}

class Instructor1 {
    id: number;
    name: string;

    constructor(instructorId: number, instructorName: string) {
        this.id = instructorId;
        this.name = instructorName;
    }

    createCourse(title: string): Course {
        return new Course(title, this);
    }

    createLesson(course: Course, title: string): void {
        course.addLesson1(title);
    }

    createAssignment(lesson: Lesson, assignmentTitle: string): void {
        lesson.addAssignment(assignmentTitle);
    }

    createAssessment(course: Course, assessmentTitle: string): void {
        course.addAssessment1(assessmentTitle);
    }
}

class Course1 {
    title: string;
    instructor: Instructor;
    lessons: Lesson[];
    assessments: string[];

    constructor(title: string, instructor: Instructor) {
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assessments = [];
    }

    addLesson(title: string): void {
        this.lessons.push(new Lesson(title));
    }

    addAssessment(assessmentTitle: string): void {
        this.assessments.push(assessmentTitle);
    }
}

class Lesson {
    title: string;
    assignments: string[];

    constructor(title: string) {
        this.title = title;
        this.assignments = [];
    }

    addAssignment(assignmentTitle: string): void {
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
