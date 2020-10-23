import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CreateGameModule } from '../create-game/create-game.module';
import { GamesListModule } from '../games-list/games-list.module';
import { SignInService } from '../sign-in/sign-in.service';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    MatButtonModule,
    RouterModule,
    GamesListModule,
    CreateGameModule,
  ],
  providers: [SignInService],
})
export class DashboardModule {}
