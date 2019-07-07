import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProdctListComponent } from './prodct-list/prodct-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProdctAlertsComponent } from './prodct-alerts/prodct-alerts.component';
import { ProdctDetailsComponent } from './prodct-details/prodct-details.component';
import { CartComponent } from './cart/cart.component';
import { ShoppingComponent } from './shopping/shopping.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdctListComponent,
    TopBarComponent,
    ProdctAlertsComponent,
    ProdctDetailsComponent,
    CartComponent,
    ShoppingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProdctListComponent },
      { path: 'products/:productId', component: ProdctDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShoppingComponent }
    ])    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
