import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {


  query = signal<string>('hello devs');
  user = signal<string>('andrres');

  myObserbable$ = toObservable(this.user);

  computedResult = computed(() =>  `result ${this.user()} ${this.query()} `);


  onChange(){
    this.query.set('epa we are done')
    this.user.set('david')
  }

  onUpdate(){
    this.query.update((current) => current + ' andres')
  }
}
