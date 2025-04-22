

import { CommonModule } from '@angular/common';
import { afterNextRender, afterRender, Component, EnvironmentInjector, inject, OnInit, PLATFORM_ID, runInInjectionContext } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FirstService } from '../../api/first.service';
import { CardComponent } from '../card/card.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { CardPlaceHolderComponent } from '../card-place-holder/card-place-holder.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink, CardComponent, CardPlaceHolderComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

  private readonly platform = inject(PLATFORM_ID);
  items: any[] = [ ];



  
  private readonly itemsservice = inject(FirstService);
  items$ = this.itemsservice.getAll();
  
  signalItems = toSignal(this.items$, {requireSync: true});

  serviceP: any;

  private readonly injector = inject(EnvironmentInjector);

  constructor(){

    afterNextRender(() => {
      localStorage.setItem('cart', 'andres');
      console.log('navegador',this.platform)
    });

    afterRender(() => {
      console.log('servidor',this.platform)
    })
   
  
  }

  ngOnInit(): void {
    const eee = this.items$.subscribe((value)=>{
      this.items = value;
    });
    runInInjectionContext(this.injector, () => {
      this.serviceP = inject(FirstService);
      const result = toSignal(this.items$);
     // console.log('este es', result)init
    })


  
  }


}
