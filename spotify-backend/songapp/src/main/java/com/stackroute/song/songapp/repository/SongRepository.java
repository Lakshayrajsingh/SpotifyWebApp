package com.stackroute.song.songapp.repository;

import com.stackroute.song.songapp.model.Songs;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SongRepository extends MongoRepository<Songs,String> {

}
