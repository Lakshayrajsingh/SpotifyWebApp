import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private userService:UserService,private adminService:AdminService,private router:Router) { 
    this.getUserDetails();
    this.getAllSongs();
  }

  ngOnInit(): void {
  }
  
  userDetails:any;
  getUserDetails(){
    this.userService.getUserDetails().subscribe(
      response=>{
        console.log("response = " + response); 
        this.userDetails=response;
      }
    )
  }
  
  addSongToPlaylist(songObj:any){
    this.userService.addSongToPlaylist(songObj).subscribe(
      response=>{
        this.getUserDetails();
      }
    )
  }

  allSongs:any;
  getAllSongs(){
    this.adminService.getAllSongs().subscribe(
      response=>{
        this.allSongs=response;
      }
    )
  }
  
  deleteSong(sondId:any){
    this.adminService.deleteSong(sondId).subscribe(
      response=>{
        this.getAllSongs;
      }
    )
  }
  playSong(p: any){
   this.userService.toPlaySong = p;
    this.router.navigate(['song'])
// this.router.navigateByUrl
  }
}
