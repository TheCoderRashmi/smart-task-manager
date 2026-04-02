import { Component, inject } from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  taskService = inject(TaskService);
}
