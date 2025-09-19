import { Injectable } from '@angular/core';
import { Camera, CameraPhoto, CameraResultType, CameraSource,Photo } from '@capacitor/camera'
import { Filesystem,Directory } from '@capacitor/filesystem'
import { Preferences } from '@capacitor/preferences'
import { Foto } from '../models/foto.interface'

@Injectable({
  providedIn: 'root'
})
export class FotoService {
  //arrreglo para almacenar fotos
  public fotos: Foto [] = [];

  constructor( ) { }

  public async addNewToGallery()
  { 

    //proceso para tomar la foto
    const fotoCapturada = await Camera.getPhoto({
     resultType: CameraResultType.Uri,
     source: CameraSource.Camera,
     quality: 100 
    })

    /*this.fotos.unshift({
       filepath: "foto_",
       webviewPath: fotoCapturada.webPath!

    })*/

    //const savedImageFile = await  this.savePicture(fotoCapturada)
    //this.fotos.unshift(savedImageFile)      
  }

  public async savePicture(cameraPhoto:CameraPhoto)
  {

    //convertir la foto a formato base64
    const base64Data = await this.readAsBase64(cameraPhoto)

    //Escribir la foto en el directorio
    const fileName = new Date().getTime + '.jpeg'; 

  }

  public async readAsBase64(cameraPhoto: CameraPhoto)
  {
    //convertir de Blob a Base64
    const response = await fetch(cameraPhoto.webPath!) 
    const Blob = await response.blob()
  }
}
