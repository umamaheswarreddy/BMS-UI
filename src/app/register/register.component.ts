import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service'
import { from, Observable } from 'rxjs';
import { User } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  item:User;
  errMsg:string;
  isNew:boolean;
  success=false;
  
  
  constructor(
    private Service:UserService,
    private actRoute:ActivatedRoute,
    private router:Router
    
    ) { }
    
  ngOnInit() {
    let id=this.actRoute.snapshot.params.id;
    if(id){
      this.isNew=false;
      this.Service.getById(id).subscribe(
        (data) =>{
          this.item=data;
        }
      );

    }
    else{
      this.isNew=true;
      this.item={
        "id":0,
        "firstName":'',
        "lastName":'',
        "password":'',
        "conformPassword":'',
        "email":'',
        "contactNumber":'',
        "pan":'',
        "birthday":'' 
        
        }
      };
    }
  
  save(){
    let ob:Observable<User>;
    if(this.isNew){
      ob=this.Service.addEmp(this.item);
    }
    ob.subscribe(
      (Data) =>{
        name:String 
        alert(this.item.firstName+" registered successfully.");
        this.success=false;
        this.router.navigateByUrl("");
      },
      (error)=> {
        
        this.errMsg=error.error.message;
        this.success=true;
        
      }
    );
  }
}

