import { Component } from '@angular/core';
import { FotoService } from '../services/fotoservice';

@Component({
  selector: 'app-tab1',             // define el selector del componente
  templateUrl: 'tab1.page.html',    // ruta del template HTML asociado
  styleUrls: ['tab1.page.scss'],    // estilos específicos de este componente
  standalone: false,                // indica que este componente pertenece a un módulo
})
export class Tab1Page {

  // inyección del servicio de fotos, se hace público para usar en el HTML
  constructor(public fotoService: FotoService) {}

  /**
   * Método que se ejecuta al presionar el botón de la cámara.
   * Llama al servicio para tomar y guardar una nueva foto.
   */
  addPhotoToGallery() {
    this.fotoService.addNewToGallery();
  }

  /**
   * Hook de ciclo de vida de Angular/Ionic.
   * Se ejecuta al iniciar el componente y carga las fotos guardadas en cache.
   */
  async ngOnInit() {
    await this.fotoService.loadSaved();
  }
}