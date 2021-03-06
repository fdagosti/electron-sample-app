import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { NgxElectronModule } from 'ngx-electron';
import {NgxFsModule} from 'ngx-fs';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { TilesComponent } from './tiles/tiles.component';
import { IviComponent } from './ivi/ivi.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { FooterComponent } from './footer/footer.component';
import { UsbComponent } from './toolbox/usb/usb.component';
import { MapDownloadComponent } from './toolbox/map-download/map-download.component';
import {TomTomService} from './tom-tom.service';
import { ToolboxSettingsComponent } from './toolbox/toolbox-settings/toolbox-settings.component';
import {UsbService} from "./usb.service";
import { TreeModule } from 'angular-tree-component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';


const appRoutes: Routes = [
  {path: 'ivi', component: IviComponent},
  {path: 'toolbox', component: ToolboxComponent},
  {path: 'tests', component: TilesComponent},
  {path: '', component: HeroComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    TilesComponent,
    IviComponent,
    ToolboxComponent,
    FooterComponent,
    UsbComponent,
    MapDownloadComponent,
    ToolboxSettingsComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxElectronModule,
    NgxFsModule,
    TreeModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    ),
  ],
  providers: [TomTomService, UsbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
