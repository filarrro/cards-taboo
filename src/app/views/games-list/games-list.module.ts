import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { GamesListComponent } from './games-list.component';

@NgModule({
  declarations: [GamesListComponent],
  imports: [CommonModule, MatButtonModule, RouterModule, MatIconModule],
})
export class GamesListModule {}
