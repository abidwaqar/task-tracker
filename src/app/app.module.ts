import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TasksComponent } from './components/tasks/tasks.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ButtonComponent,
        TasksComponent,
        TaskItemComponent,
        AddTaskComponent,
    ],
    imports: [BrowserModule, FontAwesomeModule, HttpClientModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
