package com.ayush.canteen_food_api.Repository;

import com.ayush.canteen_food_api.Entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<OrderEntity,Long> {
}
