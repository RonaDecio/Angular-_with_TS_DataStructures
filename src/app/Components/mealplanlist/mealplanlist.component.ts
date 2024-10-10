import { Component } from '@angular/core';

@Component({
  selector: 'app-mealplanlist',
  templateUrl: './mealplanlist.component.html',
  styleUrl: './mealplanlist.component.css'
})
export class MealplanlistComponent {
  meals: string[] = ['Breakfast: Oatmeal', 'Lunch: Grilled Chicken', 'Dinner: Salmon with Veggies'];
  meal: string = '';

  addMeal(): void {
    if (this.meal.trim()) {
      this.meals.push(this.meal.trim());
      this.meal = '';
    }
  }

  removeMeal(index: number): void {
    this.meals.splice(index, 1);
  }
}
