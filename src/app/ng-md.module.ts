import { NgModule }      from '@angular/core';
import {MdButtonModule,  MdTabsModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

@NgModule({
  imports: [BrowserAnimationsModule, MdButtonModule, MdTabsModule],
  exports: [BrowserAnimationsModule, MdButtonModule, MdTabsModule],
})
export class MaterialDesignModule { }