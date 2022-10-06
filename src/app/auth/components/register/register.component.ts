import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { registerAction } from '../../store/actions/register.action';
import { isSubmittingSelector } from '../../store/selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public form!: UntypedFormGroup;
  isSubmitting$!: Observable<boolean>;

  constructor(private fb: UntypedFormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.intializeValue();
  }

  public initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: '',
    });
  }

  private intializeValue(): void {
    this.isSubmitting$ = this.store.select(isSubmittingSelector);

    this.isSubmitting$.subscribe((data) => {
      console.log(data);
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
    this.store.dispatch(registerAction(this.form.value));
  }
}
