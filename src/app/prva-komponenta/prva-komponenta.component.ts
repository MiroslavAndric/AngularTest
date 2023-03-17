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
  prviPlaceholder = 'Placeholder prvog inputa'
  isDisabled = true;
  ime = 'moje ime';
  isLoggedIn = false;
  drugaPromenljiva= 'Pocetna vrednost';
  private mojDrugiBroj = 2000;
  constructor() {
    console.log('Ovo je moja prva komponenta')
  }

  ngOnInit(): void {
    setTimeout(() =>{
      this.naslov = 'Novi naslov' + this.mojDrugiBroj;
      this.prviPlaceholder = 'Place holder na srpskom'
      this.isDisabled = false;
      this.isLoggedIn = true;
    }, 2000)
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
  liknuoNaDugme(): void {
    console.log('kliknuo na dugme')
  }
  promeniIme(vrednost: string): void {
    console.log(vrednost)
    this.ime = vrednost;
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