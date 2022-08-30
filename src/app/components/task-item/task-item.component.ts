import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/Task';

@Component({
    selector: 'app-task-item',
    templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
    @Input() task: Task;

    @Output() onDeleteTask: EventEmitter<void> = new EventEmitter();
    @Output() onToggleReminder: EventEmitter<void> = new EventEmitter();

    faTimes = faTimes;

    constructor() {}

    ngOnInit(): void {}

    onDelete(): void {
        this.onDeleteTask.emit();
    }

    onToggle(): void {
        this.onToggleReminder.emit();
    }
}
