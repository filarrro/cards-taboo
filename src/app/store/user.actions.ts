export interface User {
  email: string;
}

export class SetUser {
  static readonly type = '[User] SetUser';

  constructor(public user: User) {}
}

export class ClearUser {
  static readonly type = '[User] ClearUser';
}
