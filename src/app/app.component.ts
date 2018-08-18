import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { HomePage } from '../pages/home/home';


// New implements
import { FcmProvider } from '../providers/fcm/fcm';
import { ToastController, AlertController } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';
import { tap } from 'rxjs/operators';



//End implements section
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private push: Push, fcm: FcmProvider, toastCtrl: ToastController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      //New implements

        fcm.getToken();
        fcm.listenToNotifications().pipe(
          tap(msg => {
            // const alert = alertCtrl.create({
            //   title: 'New client',
            //   subTitle: msg.body,
            //   buttons: ['Acept', 'Deny']
            // });
            // alert.present();
            const toast = toastCtrl.create({
              message: msg.body,
              duration: 3000
            });
            toast.present();
          })
        )
        .subscribe()
      //End new implements
    });

    // this.pushSetup()
  }
  // pushSetup(){
  //   const options: PushOptions = {
  //     android: {
  //       senderID: '688932327823'
  //     },
  //     ios: {
  //         alert: 'true',
  //         badge: true,
  //         sound: 'false'
  //     },
  //     // windows: {},
  //     // browser: {
  //     //     pushServiceURL: 'http://push.api.phonegap.com/v1/push'
  //     // }
  //   };
     
  //   const pushObject: PushObject = this.push.init(options);
    
    
  //   pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
    
  //   pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
    
  //   pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  // }
}

