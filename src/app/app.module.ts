import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { environment } from 'src/environments/environment'
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'

// RUTAS

import { APP_ROUTING } from './app.routes'
import { IndexComponent } from './components/public/index/index.component'

@NgModule({
  declarations: [AppComponent, IndexComponent],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
