import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ClearUser, SetUser, User } from './user.actions';

interface UserStateModel {
  version: number;
  user: User;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    version: 1,
    user: undefined,
  },
})
@Injectable()
export class UserState {
  @Selector()
  static user(state: UserStateModel): User {
    return state.user;
  }

  @Action(SetUser)
  setUser(ctx: StateContext<UserStateModel>, action: SetUser): void {
    ctx.patchState({
      user: {
        email: action.user.email,
      },
    });
  }

  @Action(ClearUser)
  changeLanguage(ctx: StateContext<UserStateModel>): void {
    ctx.patchState({
      user: undefined,
    });
  }
}
