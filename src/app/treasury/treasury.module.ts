import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreasuryRoutingModule } from './treasury-routing.module';
import { Route1Component } from './route1/route1.component';


@NgModule({
  declarations: [
    Route1Component
  ],
  imports: [
    CommonModule,
    TreasuryRoutingModule
  ]
})
export class TreasuryModule { }
