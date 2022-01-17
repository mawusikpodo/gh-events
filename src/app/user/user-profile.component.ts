import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  template: `
  <h1>Edit Your Profile</h1>
  <hr>
  <div class="col-md-6">
    <h3>[Edit profile form will go here]</h3>
    <br />
    <br />
    <button type="submit" class="btn btn-primary">Save</button>
    <button type="button" class="btn btn-default">Cancel</button>
  </div>
  `,
  styles: [
  ]
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
