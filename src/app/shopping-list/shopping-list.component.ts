import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients [] = [
    new Ingredients('Apples', 10),
    new Ingredients('Grapes', 2.4),
    new Ingredients('Watermelon', 22),
  ];



  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
  }

}
