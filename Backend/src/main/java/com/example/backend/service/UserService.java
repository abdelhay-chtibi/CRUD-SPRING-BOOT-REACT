package com.example.backend.service;

import com.example.backend.model.User;

import java.util.List;

public interface UserService {
    User create(User user);
    List<User> selectAll();
    User updateUser(Long id , User newUser);
    String delete(Long id);
    User getUserById(Long id);

}
