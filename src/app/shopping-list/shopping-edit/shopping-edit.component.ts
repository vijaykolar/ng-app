import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredients} from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredients>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const nameInputValue = this.nameInputRef.nativeElement.value;
    const amountInputValue = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredients(nameInputValue, amountInputValue);
    this.ingredientAdded.emit(newIngredient);
  }
}
