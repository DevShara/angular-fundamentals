import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';

const emptyCourse: Course = {
  id: null,
  title: null,
  description: '',
  percentComplete: 0,
  favorite: false,
};

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 2,
      title: 'Basics of Go',
      description: 'Learn the fundamentals of Golang',
      percentComplete: 96,
      favorite: true,
    },
  ];

  selectedCourse = emptyCourse;

  constructor() {}

  ngOnInit(): void {}

  selectCourse(course) {
    this.selectedCourse = course;
  }

  deleteCourse(courseId) {
    console.log('COURSE DELETED:', courseId);
  }

  reset() {
    this.selectedCourse = emptyCourse;
  }
}
