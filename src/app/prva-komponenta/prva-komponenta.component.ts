import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prva-komponenta',
  templateUrl: './prva-komponenta.component.html',
  styleUrls: ['./prva-komponenta.component.css']
})
export class PrvaKomponentaComponent implements OnInit {
  naslov = 'Naslov prve komponente sa casa 40'
  i = 0;
  mojBroj = 1000;
  istina = true;
  constructor() {
    console.log('Ovo je moja prva komponenta')
  }

  ngOnInit(): void {
    console.log('on init')
    setInterval(()=> {
      // this.naslov += this.i++
    }, 500)
  }
  naKeyUp(tekst: string): void {
    console.log(tekst)
  }
  naMouseOver(): void {
    console.log("na mouse over")
  }
}

// interface Osoba {
//   ime: string;
//   prezime: string;
// }


// class Ucenik implements Osoba {
//   brIndexa: string;
//   ime: string;
//   prezime: string;

//   constructor(ucenik: Ucenik) {
//     this.brIndexa = ucenik.brIndexa
//     this.ime = ucenik.ime;
//     this.prezime = ucenik.prezime;
//   }
// }