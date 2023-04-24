package com.stackroute.song.songapp.controller;

import com.stackroute.song.songapp.exception.UserAlreadyExistsException;
import com.stackroute.song.songapp.exception.UserNotFoundException;
import com.stackroute.song.songapp.model.Songs;
import com.stackroute.song.songapp.service.SongService;
import com.sun.jdi.request.StepRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/song-app-v1")
public class SongController {
    @Autowired
    private SongService songService;

    @GetMapping("/get-all-songs")
    public ResponseEntity<?> getAllSongs(){
        return new ResponseEntity<>(songService.getAllSongs(), HttpStatus.OK);
    }

    @GetMapping("/get-song-by-id/{songId}")
    public ResponseEntity<?> getSongById(@PathVariable String productId) throws UserNotFoundException {
        try {
            return new ResponseEntity<>(songService.getSongById(productId), HttpStatus.OK);
        }catch (UserNotFoundException ex){
            throw new UserNotFoundException();
        }
    }

    @PostMapping("/admin/add-new-song")
    public ResponseEntity<?> addSong(@RequestBody Songs songs) throws UserAlreadyExistsException {
        try {
            return new ResponseEntity<>(songService.addSong(songs), HttpStatus.OK);
        } catch (UserAlreadyExistsException ex) {
            throw new UserAlreadyExistsException();
        }
    }

    @PutMapping("/admin/update-song")
    public ResponseEntity<?> updateSong(@RequestBody Songs songs) throws UserNotFoundException {
        try {
            return new ResponseEntity<>(songService.updateSong(songs), HttpStatus.OK);
        }catch (UserNotFoundException ex){
            throw new UserNotFoundException();
        }
    }

    @DeleteMapping("/admin/delete-song/{songId}")
    public ResponseEntity<?> deleteSong(@PathVariable String songId) throws UserNotFoundException {
        try {
            return new ResponseEntity<>(songService.deleteSongs(songId), HttpStatus.OK);
        }catch (UserNotFoundException ex){
            throw new UserNotFoundException();
        }
    }
}
