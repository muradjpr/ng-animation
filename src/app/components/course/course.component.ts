import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ICourse } from '../../animations/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  @Input() course!: ICourse;
  @ViewChild('statusRef') statusRef!: ElementRef<HTMLSelectElement>;
  @Output() updatedStatus = new EventEmitter<string>();
  @Output() deleteCourse = new EventEmitter<void>();

  onStatusUpdate() {
    const selectedStatus = this.statusRef.nativeElement.value;
    this.updatedStatus.emit(selectedStatus);
  }

  onDeleteCourse() {
    this.deleteCourse.emit();
  }

  getBgColor() {
    return {
      'bg-green-300': this.course.status == 'active',
      'bg-yellow-300': this.course.status == 'draft',
      'bg-gray-300': this.course.status == 'inactive',
    };
  }
}
