import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

type Todo = {
  id: string;
  content: string;
  isCompleted: boolean;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: Todo[] = [];

  addTodo(ele: HTMLInputElement) {
    this.todos.push({
      id: uuidv4(),
      content: ele.value,
      isCompleted: false,
    });
    ele.value = '';
  }
}
