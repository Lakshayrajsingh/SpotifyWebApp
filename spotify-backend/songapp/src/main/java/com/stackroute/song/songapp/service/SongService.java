package com.stackroute.song.songapp.service;

import com.stackroute.song.songapp.exception.UserAlreadyExistsException;
import com.stackroute.song.songapp.exception.UserNotFoundException;
import com.stackroute.song.songapp.model.Songs;

import java.util.List;

public interface SongService {
    public abstract List<Songs> getAllSongs();
    public abstract Songs addSong(Songs songs) throws UserAlreadyExistsException;
    public abstract Songs getSongById(String songId) throws UserNotFoundException;
    public abstract boolean deleteSongs(String productId) throws UserNotFoundException;
    public abstract Songs updateSong(Songs songs) throws UserNotFoundException;
}
