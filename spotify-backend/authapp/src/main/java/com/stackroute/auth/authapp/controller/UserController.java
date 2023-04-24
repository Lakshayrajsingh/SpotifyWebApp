package com.stackroute.auth.authapp.controller;

import com.stackroute.auth.authapp.exception.UserAlreadyExistsException;
import com.stackroute.auth.authapp.exception.UserNotFoundException;
import com.stackroute.auth.authapp.service.SecurityTokenGenerator;
import com.stackroute.auth.authapp.model.SignupData;
import com.stackroute.auth.authapp.model.User;
import com.stackroute.auth.authapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin
@RestController
@RequestMapping("/auth-app-v1")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private SecurityTokenGenerator securityTokenGenerator;

    @PostMapping("/register-user1")
    public ResponseEntity<?> registerUser1(@RequestBody SignupData signupData) throws UserAlreadyExistsException {
        try {
            return new ResponseEntity<>(userService.registerUser1(signupData), HttpStatus.OK);
        } catch (UserAlreadyExistsException ex){
            throw new UserAlreadyExistsException();
        }
    }

//    @PostMapping("/register-user")
//    public ResponseEntity<?> registerUser(@RequestBody User user){
//        user.setRole("ROLE_USER");
//        return new ResponseEntity<>(userService.registerUser(user), HttpStatus.OK);
//    }

    @PostMapping("/login-check")
    public ResponseEntity<?> loginCheck(@RequestBody User user) throws UserNotFoundException {
        try {
            User result = userService.loginCheck(user);
            if (result != null) {
//            return new ResponseEntity<>(result,HttpStatus.OK);
                return new ResponseEntity<>(securityTokenGenerator.generateToken(result), HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Authentication failed", HttpStatus.OK);
            }
        }catch (UserNotFoundException ex){
            throw new UserNotFoundException();
        }
    }
}
