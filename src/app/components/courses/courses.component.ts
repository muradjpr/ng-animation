import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ICourse } from '../../animations/course';
import { CourseComponent } from '../course/course.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterModule, CourseComponent, CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  courses: ICourse[] = [
    {
      title: 'Angular Complete Guide',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibu facilis quod officia consequuntur assumenda repellat eos. Assumenda aspernatur in quod, corporis commodi necessitatibus maiores odit modi esseiusto illo cum.',
      status: 'active',
    },
    {
      title: 'Rxjs Complete Guide',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibu facilis quod officia consequuntur assumenda repellat eos. Assumenda aspernatur in quod, corporis commodi necessitatibus maiores odit modi esseiusto illo cum.',
      status: 'inactive',
    },
    {
      title: 'Angular Animations',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibu facilis quod officia consequuntur assumenda repellat eos. Assumenda aspernatur in quod, corporis commodi necessitatibus maiores odit modi esseiusto illo cum.',
      status: 'draft',
    },
  ];

  selectedCourseIndex!: number;

  onUpdate(newValue: string, index: number) {
    this.courses[index].status = newValue;
    console.log(newValue);
  }

  onDelete(index: number) {
    this.courses.splice(index, 1);
  }

  onCourseSelected(index: number) {
    this.selectedCourseIndex = index;
  }
}
