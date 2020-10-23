import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesListComponent {
  games$: Observable<any[]>;

  constructor() {
    this.games$ = of([{ name: 'asdf', status: 'new' }]);
    // .list('games')
    // .valueChanges()
    // .pipe(
    //   tap(console.log),
    //   map((games) => games.filter((game) => game.status === 'new'))
    // );
  }
}
