import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public alabamaSlammer: boolean=false;
  public whiteRussian: boolean=false;
  public godfather: boolean=false;
  public negroni: boolean=false;
  public singaporeSling: boolean=false;

  constructor() { }

  ngOnInit() {
  }

}
