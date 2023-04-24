import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  authAppBeBaseUrl = "http://localhost:4444/auth-app-v1";
  songAppBeBaseUrl = "http://localhost:5555/song-app-v1";

  registerUser(signupdata:any){
  return this.httpClient.post(this.authAppBeBaseUrl+"/register-user1",signupdata);
  }

  loginCheck(logindata:any){
    return this.httpClient.post(this.authAppBeBaseUrl+"/login-check",logindata)
  }

  getUserDetails(){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('jwt')
    });

    let requestOptions = {headers : httpHeaders}
    return this.httpClient.get(this.songAppBeBaseUrl+"/get-user-details",requestOptions);
  }

  addSongToPlaylist(songObj:any){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('jwt')
    });

    let requestOptions = {headers : httpHeaders}
    return this.httpClient.post(this.songAppBeBaseUrl+"/add-song-to-playlist",songObj,requestOptions);

  }
  
  toPlaySong:any;
  


}
