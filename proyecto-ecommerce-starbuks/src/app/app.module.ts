import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SectionComponent } from './shared/section/section.component'
import { TiendaComponent } from './Pages/Tienda/tienda/tienda.component'
import { RouterModule } from '@angular/router'
import { SidebarComponent } from './shared/sidebar/sidebar.component'
import { HomeComponent } from './pages/Home/home/home.component'
import { HeaderComponent } from './shared/header/header.component'
import { FooterComponent } from './shared/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    TiendaComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
