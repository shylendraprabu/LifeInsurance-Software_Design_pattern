package com.example.lifeensure.repository;

import com.example.lifeensure.modal.Policy;
import org.springframework.data.jpa.repository.JpaRepository;
// import java.util.List;

public interface PolicyRepository extends JpaRepository<Policy, Integer> {
    // List<Policy> findByUserLoginId(int userId);
}
