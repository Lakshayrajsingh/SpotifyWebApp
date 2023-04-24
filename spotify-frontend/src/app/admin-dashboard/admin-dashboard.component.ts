import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private adminService:AdminService) { 
    this.getAllSongs()
  }

  ngOnInit(): void {
  }
  songForm=new FormGroup({
    'songId' : new FormControl(),
    'songName' : new FormControl(),
    'genre': new FormControl(),
    'artistName': new FormControl()

  })
  sendSongData(){
    console.log(this.songForm.value);
    this.adminService.addNewSong(this.songForm.value).subscribe(
      response=>{
        console.log(response);
        this.getAllSongs();
        this.songForm.reset();
      }
    )
  }

  allSongs:any

  getAllSongs(){
    this.adminService.getAllSongs().subscribe(
      response=>{
        this.allSongs=response;
      }
    )
  }
  deleteSong(songId:string){
    console.log(songId);
    this.adminService.deleteSong(songId).subscribe(
      response=>{
        this.getAllSongs();
      }
    )
  }
  editSongForm=new FormGroup({
    'songId' : new FormControl(),
    'songName' : new FormControl(),
    'genre': new FormControl(),
    'artistName': new FormControl()
  });

  getEditableSong(song:any){
    console.log(song);
    this.editSongForm.setValue(song);
  }

  updateSong(){
    this.adminService.updateSong(this.editSongForm.value).subscribe(
      response=>{
        this.getAllSongs();
        this.editSongForm.reset();
      }
    )
  }
}
