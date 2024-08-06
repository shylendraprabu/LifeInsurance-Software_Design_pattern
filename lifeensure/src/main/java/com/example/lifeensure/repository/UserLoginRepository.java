package com.example.lifeensure.repository;

import com.example.lifeensure.modal.UserLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserLoginRepository extends JpaRepository<UserLogin, Integer> {
    // UserLogin findByEmail(String email);
}
