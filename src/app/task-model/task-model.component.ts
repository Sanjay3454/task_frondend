import { Component } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task-model',
  templateUrl: './task-model.component.html',
  styleUrls: ['./task-model.component.css']
})
export class TaskModelComponent {
  constructor( private router: Router,
    private ds: DataserviceService,
    private fb: FormBuilder){}


    
}

