import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstService } from './api/first.service';
import { takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
 
  title = 'myfirst18App';
  show: boolean = false;
  menuOpen = false;

  items2 = [
    1,
    2
  ];
 

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  onChange(){
    this.show = !this.show;

  }
}
