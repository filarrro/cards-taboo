import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from '../../store/user.actions';
import { UserState } from '../../store/user.state';
import { SignInService } from '../sign-in/sign-in.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  @Select(UserState.user) user$: Observable<User>;

  constructor(private signInService: SignInService) {}

  ngOnInit(): void {}

  logout(): void {
    this.signInService.logout();
  }
}
