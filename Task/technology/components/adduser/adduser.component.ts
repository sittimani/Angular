import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';
import { EmailValidator } from 'src/app/Validators/email.validator';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {

  form!: FormGroup;
  indexToUpdate: number;
  isAddDisabled = false;
  isUpdateDisabled = true;
  isValid = false;
  showNav = false;

  constructor(private db: DbService, private formBuilder: FormBuilder, private router: Router) {

    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', [Validators.required]],
      age: [0, [Validators.required, Validators.min(1)]],
      email: ['', [EmailValidator]]
    });

    // trigger while update button click
    this.db.behaviorSubjectObs$.subscribe(x => {
      if (x === -1) {
        this.showNav = true;
        this.form.reset();
       // console.log("x :" + x);
      } else {
        this.showNav = false;
        this.updateForm(x);
      }
    })

  }


  addUser() {
    if (this.form.valid) {
      this.isValid = false;
      this.db.addValue(this.form.value);
      this.form.reset();
      this.db.sendMessage("User Added successfully!!!");
      this.router.navigate(["service/display"])
    } else {
      this.isValid = true;
    }
  }

  // update the user value in form, triggered while user click update in display component
  updateForm(index: number) {
      this.indexToUpdate = index;
      this.isAddDisabled = true;
      this.isUpdateDisabled = false;
      this.form.setValue(this.db.array[this.indexToUpdate]);
      // this.form.get("name")?.setValue(this.db.array[index].name);
      // this.form.get("age")?.setValue(this.db.array[index].age);
      // this.form.get("email")?.setValue(this.db.array[index].email);
  }

  // update the user value in array while update in the form clicked
  updateUser() {
    this.db.array[this.indexToUpdate] = this.form.value;
    // this.db.array[this.indexToUpdate].name = this.form.get("name")?.value;
    // this.db.array[this.indexToUpdate].age = this.form.get("age")?.value;
    // this.db.array[this.indexToUpdate].email = this.form.get("email")?.value;

    this.isAddDisabled = false;
    this.isUpdateDisabled = true;
    this.form.reset();
    this.db.triggerSubsciber(-1);
    this.db.sendMessage("User edited successfully!!!");
    this.router.navigate(['service/display']);
  }
}