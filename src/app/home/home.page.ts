import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { DadesService } from '../services/dades.service';
import { User } from '../models/user.model';
import { DetailsComponent } from '../details/details.component';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(public loadingController: LoadingController, private dadesService: DadesService,public modalController: ModalController) {}
  Users$: User[];
  ngOnInit(){
   return this.dadesService.getAliments()
      .subscribe(data => this.Users$ = data);
    

  }



  async presentLoading(user: any){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
      
    });
    await loading.present();
    await loading.onDidDismiss();
    this.presentModal(user);
    console.log('Loading dismissed!');
    console.log({ });
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Click the backdrop to dismiss early...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);

}

async presentModal(user: any) {
  const modal = await this.modalController.create({
    component: DetailsComponent,
    cssClass: 'model.css',

    componentProps: {
      'user':user
    }

  });
  return await modal.present();
}


}
