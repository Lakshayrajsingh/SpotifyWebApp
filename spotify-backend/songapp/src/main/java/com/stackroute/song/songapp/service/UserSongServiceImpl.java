package com.stackroute.song.songapp.service;

import com.stackroute.song.songapp.exception.UserAlreadyExistsException;
import com.stackroute.song.songapp.exception.UserNotFoundException;
import com.stackroute.song.songapp.model.Songs;
import com.stackroute.song.songapp.model.User;
import com.stackroute.song.songapp.repository.UserSongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserSongServiceImpl implements UserSongService {
    @Autowired
    UserSongRepository userSongRepository;

    @Override
    public User addUser(User user) throws UserAlreadyExistsException {
        if(userSongRepository.findById(user.getEmailId()).isEmpty()) {
            return userSongRepository.insert(user);
        }
        else{
            throw new UserAlreadyExistsException();
        }
    }

    @Override
    public List<User> getAllUsers() {
        return userSongRepository.findAll();
    }

    @Override
    public User getUserDetails(String emailId) throws UserNotFoundException {
        if(userSongRepository.findById(emailId).isPresent()) {
            return userSongRepository.findById(emailId).get();
        }
        else {
            throw new UserNotFoundException();
        }
    }

    @Override
    public User addSong(String email, Songs songs) throws UserNotFoundException {
        if (userSongRepository.findById(email).isPresent()) {
            User user = userSongRepository.findById(email).get();
            user.getSongs().add(songs);
            return userSongRepository.save(user);
        }
        else {
            throw new UserNotFoundException();
        }
    }
//    @Override
//    public User getSongInPlayList(String email, String songId){
//        User user = userSongRepository.findById(email).get();
//        user.getSongs();
//        return userSongRepository.findAll();
//    }
}
