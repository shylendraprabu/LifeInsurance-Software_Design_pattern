package com.example.lifeensure.controller;

import com.example.lifeensure.modal.UserLogin;
import com.example.lifeensure.modal.Policy;
import com.example.lifeensure.service.UserLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserLoginController {

    @Autowired
    private UserLoginService userLoginService;

    @GetMapping
    public List<UserLogin> getAllUsers() {
        return userLoginService.getAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserLogin> getUserById(@PathVariable int id) {
        Optional<UserLogin> userLogin = userLoginService.getUserById(id);
        return userLogin.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/{id}/policies")
    public ResponseEntity<List<Policy>> getUserPolicies(@PathVariable int id) {
        Optional<UserLogin> userLogin = userLoginService.getUserById(id);
        if (userLogin.isPresent()) {
            return ResponseEntity.ok(userLogin.get().getPolicies());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public UserLogin createUser(@RequestBody UserLogin userLogin) {
        return userLoginService.createUser(userLogin);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserLogin> updateUser(@PathVariable int id, @RequestBody UserLogin userDetails) {
        try {
            UserLogin updatedUser = userLoginService.updateUser(id, userDetails);
            return ResponseEntity.ok(updatedUser);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable int id) {
        userLoginService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
