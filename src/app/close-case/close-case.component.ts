import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-close-case',
  templateUrl: './close-case.component.html',
  styleUrls: ['./close-case.component.scss']
})
export class CloseCaseComponent implements OnInit {

  close = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return 'You must enter a value';
  }

  constructor() { }

  ngOnInit() {
  }

}
