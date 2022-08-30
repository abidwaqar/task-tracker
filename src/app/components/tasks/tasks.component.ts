import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
    tasks: Task[] = [];
    subscription: Subscription;
    showAddTask: boolean;

    constructor(
        private taskService: TaskService,
        private uiService: UiService
    ) {
        this.subscription = this.uiService
            .onToggle()
            .subscribe((value) => (this.showAddTask = value));
    }

    ngOnInit(): void {
        this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
    }

    deleteTask(taskId: number): void {
        this.taskService
            .deleteTask(taskId)
            .subscribe(
                () => (this.tasks = this.tasks.filter((x) => x.id !== taskId))
            );
    }

    toggleReminder(task: Task): void {
        task!.reminder = !task!.reminder;
        this.taskService.updateTask(task).subscribe();
    }

    addTask(task: Task): void {
        this.taskService
            .addTask(task)
            .subscribe((task) => this.tasks.push(task));
    }
}
