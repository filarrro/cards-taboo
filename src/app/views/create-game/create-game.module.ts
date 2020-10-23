import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CreateGameComponent } from './create-game.component';

@NgModule({
  declarations: [CreateGameComponent],
  exports: [CreateGameComponent],
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
})
export class CreateGameModule {}
