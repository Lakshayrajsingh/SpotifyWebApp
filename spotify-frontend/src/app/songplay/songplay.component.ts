import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-songplay',
  templateUrl: './songplay.component.html',
  styleUrls: ['./songplay.component.css']
})
export class SongplayComponent implements OnInit {

  constructor(private userService:UserService) {
    
   }

  ngOnInit(): void {
  this.song=this.userService.toPlaySong;
  this.getUserDetails();
  }
  song:any;

 
  userDetails:any;
  getUserDetails(){
    this.userService.getUserDetails().subscribe(
      response=>{
        console.log(response); 
        this.userDetails=response;
      }
    )
  }





}
