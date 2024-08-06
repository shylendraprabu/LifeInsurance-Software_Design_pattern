package com.example.lifeensure.controller;

import com.example.lifeensure.modal.Policy;
import com.example.lifeensure.modal.UserLogin;
import com.example.lifeensure.service.PolicyService;
import com.example.lifeensure.service.UserLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/policies")
public class PolicyController {

    @Autowired
    private PolicyService policyService;

    @Autowired
    private UserLoginService userLoginService;

    @GetMapping
    public List<Policy> getAllPolicies() {
        return policyService.getAllPolicies();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Policy> getPolicyById(@PathVariable int id) {
        Optional<Policy> policy = policyService.getPolicyById(id);
        if (policy.isPresent()) {
            return ResponseEntity.ok(policy.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Policy> createPolicy(@RequestBody Policy policy) {
        if (policy.getUserLogin() != null && policy.getUserLogin().getId() != 0) {
            Optional<UserLogin> userLogin = userLoginService.getUserById(policy.getUserLogin().getId());
            if (userLogin.isPresent()) {
                policy.setUserLogin(userLogin.get());
                Policy createdPolicy = policyService.createPolicy(policy);
                return ResponseEntity.ok(createdPolicy);
            } else {
                return ResponseEntity.badRequest().body(null);
            }
        } else {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Policy> updatePolicy(@PathVariable int id, @RequestBody Policy policyDetails) {
        Policy updatedPolicy = policyService.updatePolicy(id, policyDetails);
        if (updatedPolicy != null) {
            return ResponseEntity.ok(updatedPolicy);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePolicy(@PathVariable int id) {
        policyService.deletePolicy(id);
        return ResponseEntity.noContent().build();
    }
}
