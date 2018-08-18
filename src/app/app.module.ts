import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Push } from '@ionic-native/push';

// =============================================================================
// New test for push notifications
// =============================================================================

import { Firebase } from '@ionic-native/firebase';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FcmProvider } from '../providers/fcm/fcm';

const firebase = {
  // your firebase web config
  apiKey: "AIzaSyAmS_9rk7E2IQGEFmJ4AdKqwwo_xR1X5oU",
  authDomain: "pushnotifications-6211c.firebaseapp.com",
  databaseURL: "https://pushnotifications-6211c.firebaseio.com",
  projectId: "pushnotifications-6211c",
  storageBucket: "pushnotifications-6211c.appspot.com",
  messagingSenderId: "688932327823"
 }

// =============================================================================
// End of the notifications
// =============================================================================

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //New implementations
    AngularFireModule.initializeApp(firebase), 
    AngularFirestoreModule,
    HttpClientModule
    //End new implementations
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Push,
    //New implementations
    Firebase,
    FcmProvider,
    //End new implementations,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
