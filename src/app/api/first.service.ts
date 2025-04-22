import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Product } from "./model";

@Injectable({providedIn: 'root'})
export class FirstService{
    private readonly _http = inject(HttpClient);

 products: Product[] = [
    { id: 1, title: 'Laptop Gamer XYZ', price: 1500.99 },
    { id: 2, title: 'Monitor Curvo 32"', price: 450.50 },
    { id: 3, title: 'Teclado Mecánico RGB', price: 120.00 },
    { id: 4, title: 'Mouse Inalámbrico Ergonómico', price: 45.75 },
    { id: 5, title: 'Auriculares con Cancelación de Ruido', price: 199.99 },
    { id: 6, title: 'Webcam 4K', price: 95.00 }
  ];

    getAll(): Observable<any>{
        return of(this.products);
        //return this._http.get('https://fakestoreapi.com/products');
    }
}