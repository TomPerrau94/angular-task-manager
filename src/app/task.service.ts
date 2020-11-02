import { Injectable } from '@angular/core';
import { Task } from './models/task.model';
import { WebRequestsService } from './web-requests.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private webReqService: WebRequestsService) {}

  getLists() {
    return this.webReqService.get('lists');
  }

  createList(title: string) {
    return this.webReqService.post('lists', { title });
  }

  deleteList(id: string) {
    return this.webReqService.delete(`lists/${id}`);
  }

  editList(listId: string, title: string) {
    return this.webReqService.put(`lists/${listId}`, { title });
  }

  getTasks(listId: string) {
    return this.webReqService.get(`lists/${listId}/tasks`);
  }

  createTask(title: string, listId: string) {
    return this.webReqService.post(`lists/${listId}/tasks`, { title });
  }

  completeTask(task: Task) {
    return this.webReqService.put(`lists/${task._listId}/tasks/${task._id}`, {
      completed: !task.completed,
    });
  }

  deleteTask(listId: string, taskId: string) {
    return this.webReqService.delete(`lists/${listId}/tasks/${taskId}`);
  }

  editTask(listId: string, title: string, taskId: string) {
    return this.webReqService.put(`lists/${listId}/tasks/${taskId}`, { title });
  }
}
