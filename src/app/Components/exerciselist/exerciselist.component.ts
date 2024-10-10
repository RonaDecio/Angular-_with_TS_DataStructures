import { Component } from '@angular/core';

@Component({
  selector: 'app-exerciselist',
  templateUrl: './exerciselist.component.html',
  styleUrl: './exerciselist.component.css'
})
export class ExerciselistComponent {
  exercises: string[] = ['Push-ups', 'Squats', 'Lunges', 'Burpees'];
  exercise: string = '';

  addExercise(): void {
    if (this.exercise.trim()) {
      this.exercises.push(this.exercise.trim());
      this.exercise = '';
    }
  }

  removeExercise(index: number): void {
    this.exercises.splice(index, 1);
  }
}
