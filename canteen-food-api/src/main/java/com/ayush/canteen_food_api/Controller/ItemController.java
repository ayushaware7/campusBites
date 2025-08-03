package com.ayush.canteen_food_api.Controller;

import com.ayush.canteen_food_api.Model.Item;
import com.ayush.canteen_food_api.Service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ItemController {

    private final ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @PostMapping("/items")
    public Item addItem(@RequestBody Item item) {
        return itemService.addItem(item);
    }

    @GetMapping("/items")
    public List<Item> getAllItems(){
        return itemService.getAllItems();
    }

    @GetMapping("/category/{category}")
    public List<Item> getItemByCategory(@PathVariable String category){
        return itemService.getItemByCategory(category);
    }
}
