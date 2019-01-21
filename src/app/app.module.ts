import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    UpdateproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,     
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component : HomeComponent},
      {path: 'product', component : ProductComponent},
      {path: "updateproduct/:id", component : UpdateproductComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
