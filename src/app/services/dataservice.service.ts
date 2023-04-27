import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }



    register(uname:any,email:any,psw:any ) {
      const data={uname,email,psw}
      console.log(data);
      
      return this.http.post('http://localhost:3000/register',data)

        }



    login(email:any,psw:any){
     
        const data={email,psw}
        return this.http.post('http://localhost:3000/login',data)
          
    }    

    tasks(date:any,taskName:any,taskData:any,email:any){
      const data={date,taskName,taskData,email}
      console.log(data);
      
      return this.http.post('http://localhost:3000/tasks',data)

    }

    getTasks(email:any){
      const data={email}
      console.log(data);
      
      return this.http.post('http://localhost:3000/getTasks',data)
    }

    editTask(date:any,taskName:any,taskData:any,email:any,Taskid:any){
      const data={date,taskName,taskData,email,Taskid}
      console.log(data);
      return this.http.post('http://localhost:3000/editTasks',data)

    }


    delete(email:any){
      const data={email}
      console.log(data);
      return this.http.post('http://localhost:3000/delete',data)

    }

    deleteTask(Taskid:any){
      const data={Taskid}
      return this.http.post('http://localhost:3000/deleteTask',data)
    }
   
  
}
