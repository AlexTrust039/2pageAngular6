import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  list = [];

  constructor(router: Router, share: ShareService) {
    share.mass = this.list;

    document.addEventListener("keydown", function (event) {
      if (event.keyCode == 32) {
        router.navigate(['/second']);
      }
    });
  }

  ngOnInit() {

  }

  form = new FormGroup({
    question: new FormControl()
  });

  add() {
    this.list.push(this.form.value);
    this.form.reset();
  }
}
