package com.stackroute.song.songapp.controller;

import com.stackroute.song.songapp.exception.UserAlreadyExistsException;
import com.stackroute.song.songapp.exception.UserNotFoundException;
import com.stackroute.song.songapp.model.Songs;
import com.stackroute.song.songapp.model.User;
import com.stackroute.song.songapp.service.UserSongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
@RestController
@RequestMapping("/song-app-v1")
public class UserSongController {
    @Autowired
    private UserSongService userSongService;

    @PostMapping("/add-user")
    public ResponseEntity addUser(@RequestBody User user) throws UserAlreadyExistsException {
        try {
            user.setSongs(new ArrayList<Songs>());
            return new ResponseEntity(userSongService.addUser(user), HttpStatus.OK);
        }catch (UserAlreadyExistsException ex){
            throw new UserAlreadyExistsException();
        }
    }

    @GetMapping("/get-all-users")
    public ResponseEntity<?> getAllUsers(){
        return new ResponseEntity<>(userSongService.getAllUsers(),HttpStatus.OK);
    }

    @GetMapping("/get-user-details")
    public ResponseEntity<?> getUserDetails(HttpServletRequest request) throws UserNotFoundException {
        try {
            String emailid = (String) request.getAttribute("current_user_emailid");
            System.out.println(emailid);
            return new ResponseEntity<>(userSongService.getUserDetails(emailid), HttpStatus.OK);
        }catch (UserNotFoundException ex){
            throw new UserNotFoundException();
        }
    }
    @PostMapping("/add-song-to-playlist")
    public ResponseEntity<?> addSong(@RequestBody Songs songs,HttpServletRequest request) throws UserNotFoundException {
        try {
            String current_email = (String) request.getAttribute("current_user_emailid");
            return new ResponseEntity<>(userSongService.addSong(current_email, songs), HttpStatus.OK);
        }catch (UserNotFoundException ex){
            throw new UserNotFoundException();
        }
    }
//    @GetMapping("")
}
