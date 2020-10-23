import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private store: Store) {
    // this.angularFireAuth.user.subscribe((user) => {
    //   if (user) {
    //     this.store.dispatch(new SetUser(user));
    //   } else {
    //     this.store.dispatch(new ClearUser());
    //   }
    // });
  }
}
