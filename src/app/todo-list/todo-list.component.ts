import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, AddTodoComponent, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: string[] = [];

  addTodo (todo: string) {
    this.todos.push(todo);
  }

  removeTodo (todo: string) {
    this.todos = this.todos.filter(t => t !== todo);
  }
}
