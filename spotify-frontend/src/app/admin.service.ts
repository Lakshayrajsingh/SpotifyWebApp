import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }

  songAppBeBaseUrl = "http://localhost:5555/song-app-v1";

  getAllSongs() {
    return this.httpClient.get(this.songAppBeBaseUrl+"/get-all-songs")
  }

  addNewSong(songObj:any){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer' + localStorage.getItem('jwt')
    });
    
    let requestOptions = {headers : httpHeaders}
    return this.httpClient.post(this.songAppBeBaseUrl+"/admin/add-new-song",songObj,requestOptions);
  }

  deleteSong(songId:string){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer' + localStorage.getItem('jwt')
    });
    
    let requestOptions = {headers : httpHeaders}
    return this.httpClient.delete(this.songAppBeBaseUrl+"/admin/delete-song/"+songId);
  }

  updateSong(songObj:any){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer' + localStorage.getItem('jwt')
    });
    
    let requestOptions = {headers : httpHeaders}
    return this.httpClient.put(this.songAppBeBaseUrl+"/admin/update-song",songObj,requestOptions);
  }
}
