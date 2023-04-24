package com.stackroute.song.songapp.service;

import com.stackroute.song.songapp.exception.UserAlreadyExistsException;
import com.stackroute.song.songapp.exception.UserNotFoundException;
import com.stackroute.song.songapp.model.Songs;
import com.stackroute.song.songapp.repository.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SongServiceImpl implements SongService{
    @Autowired
    SongRepository songRepository;

    @Override
    public List<Songs> getAllSongs() {
        return songRepository.findAll();
    }

    @Override
    public Songs addSong(Songs songs) throws UserAlreadyExistsException {
        if(songRepository.findById(songs.getSongId()).isEmpty()){
            return songRepository.insert(songs);
        }
        else {
            throw new UserAlreadyExistsException();
        }
    }

    @Override
    public Songs getSongById(String songId) throws UserNotFoundException {
        if(songRepository.findById(songId).isPresent()) {
            return songRepository.findById(songId).get();
        }
        else{
            throw new UserNotFoundException();
        }
    }

    @Override
    public boolean deleteSongs(String productId) throws UserNotFoundException {
        if(songRepository.findById(productId).isPresent()) {
            songRepository.deleteById(productId);
            return true;
        }
        else {
            throw new UserNotFoundException();
        }
    }

    @Override
    public Songs updateSong(Songs songs) throws UserNotFoundException {
        if(songRepository.findById(songs.getSongId()).isPresent()) {
            return songRepository.save(songs);
        }
        else {
            throw new UserNotFoundException();
        }
    }
}
