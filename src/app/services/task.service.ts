import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../Task';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};

@Injectable({
    providedIn: 'root',
})
export class TaskService {
    private apiUrl = 'http://localhost:5000/tasks';

    constructor(private httpClient: HttpClient) {}

    getTasks(): Observable<Task[]> {
        return this.httpClient.get<Task[]>(this.apiUrl);
    }

    deleteTask(taskId: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.apiUrl}/${taskId}`);
    }

    updateTask(task: Task): Observable<Task> {
        return this.httpClient.put<Task>(
            `${this.apiUrl}/${task.id!}`,
            task,
            httpOptions
        );
    }

    addTask(task: Task): Observable<Task> {
        return this.httpClient.post<Task>(this.apiUrl, task, httpOptions);
    }
}
