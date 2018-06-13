import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-paroquia',
  templateUrl: './paroquia.component.html',
  styleUrls: ['./paroquia.component.css']
})
export class ParoquiaComponent implements OnInit {

  nomeParoquia = 'Paroquia Nossa Senhora das Graças da Medalha Milagrosa'
  

  constructor() { }

  ngOnInit() {
  }

}
