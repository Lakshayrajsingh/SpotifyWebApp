package com.stackroute.song.songapp.repository;

import com.stackroute.song.songapp.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserSongRepository extends MongoRepository<User, String> {
}
