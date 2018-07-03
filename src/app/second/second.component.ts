import { Component, OnInit, Input } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  list = [];
  constructor(private share: ShareService) { 

    this.list = this.share.mass;
    console.log(this.list)
  }

  ngOnInit() {

    
  }
}
