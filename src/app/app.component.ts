import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

export type Todo = {
  id: string;
  content: string;
  isCompleted: boolean;
  isEdit: boolean;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: Todo[] = [];
  todoFilter = '/';
  constructor(private route: ActivatedRoute) {
    this.route.fragment
      .pipe(
        map((value) => value ?? '/'),
        map((value) => value.substring(1))
      )
      .subscribe({
        next: (value) => (this.todoFilter = value),
      });
  }

  addTodo(ele: HTMLInputElement) {
    this.todos = [
      ...this.todos,
      {
        id: uuidv4(),
        content: ele.value,
        isCompleted: false,
        isEdit: false,
      },
    ];
    ele.value = '';
  }

  get itemCount() {
    console.log('a');
    return this.todos.filter((x) => !x.isCompleted).length;
  }

  removeTodo(todo: Todo) {
    this.todos = this.todos.filter((x) => x.id !== todo.id);
  }

  clearCompleted() {
    this.todos = this.todos.filter((x) => !x.isCompleted);
  }
}
