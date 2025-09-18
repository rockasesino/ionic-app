import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource,Photo } from '@capacitor/camera'
import { Filesystem,Directory } from '@capacitor/filesystem'
import { Preferences } from '@capacitor/preferences'

@Injectable({
  providedIn: 'root'
})
export class Foto {

  public async addNewToGallery()

  { 

    //proceso para tomar la foto
    const fotoCapturada = await Camera


  }
}
