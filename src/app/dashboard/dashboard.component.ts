import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataserviceService } from '../services/dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  tasksArray:any
  email:any
  constructor( private router: Router,
    private ds: DataserviceService,
    private fb: FormBuilder,
    ){
      this.email = localStorage.getItem("currentuser")
      const email=this.email
      this.ds.getTasks(email).subscribe((result: any) => {

        this.tasksArray=result.data
        console.log(  this.tasksArray);
       })

       if(!localStorage.getItem("currentuser")){
        alert("please login")
        this.router.navigateByUrl("")
      }
      
    }


    taskForm = this.fb.group({
      date: ['', [Validators.required]],
      taskName: ['', [Validators.required]],
      TaskData: ['', [Validators.required]]
    });
    
    // editForm = this.fb.group({
    //   date: ['', [Validators.required]],
    //   taskName: ['', [Validators.required]],
    //   TaskData: ['', [Validators.required]]
    // });
      
      // isFormVisible = false;
    
   
     
      

      
       
        // console.log(result);
        // this.tasks=result.data
      //   var results=result.user
      //        this.tasks.push({
      //   date:results.date,
      //   taskName:results.taskName ,
      //   taskData:results. taskData
        
      // });
      // this.isFormVisible = false;
      // this.taskForm.reset();


      logout(){
        localStorage.removeItem("currentuser")
        this.router.navigateByUrl("")
        }
    
      reloadPage() {
        window.location.reload();
     }
     



    //  edit(){
    //   const date = this.editForm.value.date;
    //     const taskName = this.editForm.value.taskName;
    //     const taskData = this.editForm.value.TaskData;
    //     const email=this.email

    //     if(this.editForm.valid){
    //       this.ds.editTask(date,taskName,taskData,email).subscribe((result: any) => {
        
    //       },
    //       result=>{
    //         alert(result.error.message) 
    //       })
          
    //       }
    //       else{
    //         alert("invalidform")
    //       }

        

    //  }


    
    
    
      
      onSubmit() {
       this.reloadPage()
        
        const date = this.taskForm.value.date;
        const taskName = this.taskForm.value.taskName;
        const taskData = this.taskForm.value.TaskData;
        const email=this.email
        
    if(this.taskForm.valid){
      this.ds.tasks(date,taskName,taskData,email).subscribe((result: any) => {
        


        
       
    
      },
      result=>{
        alert(result.error.message) 
      })
    
    
    
      
      }
      else{
        alert("invalidform")
      }
    }
    

delete(){
  
  const email=this.email
  this.ds.delete(email).subscribe((result: any) => {
    alert(result.message)
    this.logout()
   

   },
   result=>{
    alert(result.error.message) 
  }
   
   
   )
  

}


}