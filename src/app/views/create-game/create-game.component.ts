import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateGameComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      teamsCount: [
        2,
        [Validators.required, Validators.min(2), Validators.max(6)],
      ],
      roundTime: [1.5, [Validators.required, Validators.min(0.5)]],
      cartCount: [
        40,
        [Validators.required, Validators.min(10), Validators.max(80)],
      ],
      status: 'new',
    });
  }

  save(): void {
    if (!this.form.valid) {
      return;
    }

    const value = this.form.value;
    console.log(value);

    // const newGameRef = this.db.database.ref('games').push();
    // newGameRef.set(value);
    // this.router.navigate(['..']);
  }
}
