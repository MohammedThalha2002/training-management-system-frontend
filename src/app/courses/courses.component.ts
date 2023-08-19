import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
})
export class CoursesComponent {
  courses: Array<number> = [1, 2, 3, 4, 5, 6];
}

interface Course {
  id: number;
  title: string;
  description: string;
  img: string;
}
