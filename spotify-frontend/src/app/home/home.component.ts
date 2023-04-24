import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private adminservice:AdminService) {
    this.getAllSongs();
   }

  ngOnInit(): void {
  }
  
  allSongs:any;
  getAllSongs(){
    this.adminservice.getAllSongs().subscribe(
      response=>{
        this.allSongs=response;
      }
    )
  }

}
