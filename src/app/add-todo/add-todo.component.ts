import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  newTodo: string = '';
  @Output() todoAdded = new EventEmitter<string>();

  addTodo() {
    if (this.newTodo.trim()) {
      this.todoAdded.emit(this.newTodo);
      this.newTodo = '';
    }
  }
}

