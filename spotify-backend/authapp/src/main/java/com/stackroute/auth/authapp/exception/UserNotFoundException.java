package com.stackroute.auth.authapp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@ResponseStatus(code = HttpStatus.NOT_FOUND,reason = "User Not Found")
public class UserNotFoundException extends Exception{
}
