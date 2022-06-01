import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public carpaccio: boolean = false;
  public ceviche: boolean = false;
  public palmito: boolean= false;
  public queijos: boolean= false;
  public salada: boolean= false;

  public picanha: boolean = false;
  public crostela: boolean = false;
  public tilapia: boolean= false;
  public polenta: boolean= false;
  public frango: boolean= false;

  public brownie: boolean = false;
  public choco: boolean = false;
  public smores: boolean = false;
  public milkshake: boolean = false;
  public cinnamon: boolean = false;



  constructor() {}

}
