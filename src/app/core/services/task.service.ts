import { Injectable, signal, computed } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {

  private tasks = signal<Task[]>([]);

  tasks$ = computed(() => this.tasks());

  completedTasks = computed(() =>
    this.tasks().filter(t => t.completed)
  );

  pendingTasks = computed(() =>
    this.tasks().filter(t => !t.completed)
  );

  addTask(title: string) {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false
    };
    this.tasks.update(t => [...t, newTask]);
  }

  toggleTask(id: number) {
    this.tasks.update(tasks =>
      tasks.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }

  deleteTask(id: number) {
    this.tasks.update(tasks =>
      tasks.filter(t => t.id !== id)
    );
  }
}