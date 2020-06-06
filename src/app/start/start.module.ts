import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartPageRoutingModule } from './start-routing.module';

import { StartPage } from './start.page';
import { SharedModule } from '../shared/shared.module';
import { LocationPickerComponent } from '../shared/pickers/location-picker/location-picker.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartPageRoutingModule,
    SharedModule
  ],
  providers:[LocationPickerComponent], //Injecting my created components
  declarations: [StartPage]
})
export class StartPageModule {}
