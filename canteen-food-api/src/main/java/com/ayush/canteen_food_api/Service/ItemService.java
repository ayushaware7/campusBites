package com.ayush.canteen_food_api.Service;

import com.ayush.canteen_food_api.Model.Item;

import java.util.List;

public interface ItemService {
    Item addItem(Item item);

    List<Item> getAllItems();

    List<Item> getItemByCategory(String category);
}
