import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PrimaryBannerComponent } from './components/primary-banner/primary-banner.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeTileComponent } from './components/home-tile/home-tile.component';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrimaryBannerComponent,
    NavigationComponent,
    FooterComponent,
    HomeTileComponent,
    ReadMoreComponent,
    ContactComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
