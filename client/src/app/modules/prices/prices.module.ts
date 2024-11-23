import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricesComponent } from './prices.component';
import { PricesRoutingModule } from './prices-routing.module';

@NgModule({
    imports: [CommonModule, PricesRoutingModule, PricesComponent],
})
export class PricesModule {}
