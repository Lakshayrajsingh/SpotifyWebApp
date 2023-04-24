package com.stackroute.song.songapp.service;

import com.stackroute.song.songapp.exception.UserAlreadyExistsException;
import com.stackroute.song.songapp.exception.UserNotFoundException;
import com.stackroute.song.songapp.model.Songs;
import com.stackroute.song.songapp.model.User;

import java.util.List;

public interface UserSongService {
    public abstract User addUser(User user) throws UserAlreadyExistsException;
    public abstract List<User> getAllUsers();
    public abstract User getUserDetails(String emailId) throws UserNotFoundException;
    public User addSong(String email, Songs songs) throws UserNotFoundException;
//    public User getSongInPlayList(String email, String songId);
}
