import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';  // Ensure this import is present
import { AppComponent } from './app.component';

// Import standalone components
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({

    imports: [
        BrowserModule,
        AppComponent,
        AppRoutingModule,  // Ensure this is included
        FormsModule,
        AddTodoComponent,
        TodoListComponent,
        TodoItemComponent
    ],
    providers: [],
    bootstrap: []
})
export class AppModule { }


