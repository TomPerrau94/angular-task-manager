import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  taskId: string;
  listId: string;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.taskId = params.taskId;
      this.listId = params.listId;
    });
  }

  editTask(title: string) {
    this.taskService
      .editTask(this.listId, title, this.taskId)
      .subscribe(() => this.router.navigate(['/lists', this.listId]));
  }
}
