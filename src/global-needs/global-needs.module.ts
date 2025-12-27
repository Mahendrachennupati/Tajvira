import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// *** primemodules strat  *** //
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { DividerModule } from 'primeng/divider';
import { OverlayModule } from 'primeng/overlay';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ChartModule } from 'primeng/chart';
import { ScrollTopModule } from 'primeng/scrolltop';
// *** prime modules End *** //

// *** angular modules strat *** //
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// *** angular modules end *** //

// *** custom imports start ***//
import { ScrollAnimateDirective } from './scroll-animate.directive';
// *** custom imports end ***//
@NgModule({
  declarations: [
    ScrollAnimateDirective
  ],
  imports: [
    CommonModule,
    SidebarModule,
    FormsModule, 
    ReactiveFormsModule,
    RatingModule ,
    DropdownModule,
    InputNumberModule,
    CardModule ,
    ButtonModule,
    DividerModule,
    CarouselModule,
    ImageModule,
    OverlayModule,
    InputTextModule,
    BadgeModule,
    InputTextareaModule,
    RadioButtonModule,
    ChartModule,
    ScrollTopModule
  ],
  exports:[
    SidebarModule,
    FormsModule, 
    ReactiveFormsModule,
    RatingModule ,
    DropdownModule,
    InputNumberModule,
    CardModule ,
    ButtonModule,
     DividerModule,
    CarouselModule,
    ImageModule,
    OverlayModule,
    InputTextModule,
    BadgeModule,
    InputTextareaModule,
    RadioButtonModule,
    ChartModule,
    ScrollTopModule,
    ScrollAnimateDirective /*animations directive*/,
  ]
})
export class GlobalNeedsModule { }
