import {Component} from 'angular2/core'
import {CourseService} from "./course.service";

@Component({
    selector: 'courses',
    template: `
        <h2>Courses here</h2>
        <p>{{ title }}</p>
        <ul>
            <li *ngFor="#course of courses">
                {{ course }}
            </li>
        </ul>
        <ul>
            <li *ngFor="#name of names">
                {{ name }}
            </li>
        </ul>
    `,
    providers: [CourseService]
})

export class CoursesComponent {
    title = "here is the Tharaka titile";
    names = ["Tharaka", "Nilupul", "Saman"];
    courses;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}