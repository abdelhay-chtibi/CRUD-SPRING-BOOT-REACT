package com.example.backend.controller;


import com.example.backend.model.User;
import org.springframework.web.bind.annotation.*;
import com.example.backend.service.UserService;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")

public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/user")
    public User newUser(@RequestBody User newUser){
        return userService.create(newUser);
    }

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userService.selectAll();
    }

    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable Long id){
        return userService.getUserById(id);
    }

    @PutMapping("/user/{id}")
    public User updateUser(@PathVariable Long id,@RequestBody User newUser){
        return userService.updateUser(id ,newUser);
    }

    @DeleteMapping("/user/{id}")
    public String deleteUser(@PathVariable Long id){
       return userService.delete(id);
    }
}
