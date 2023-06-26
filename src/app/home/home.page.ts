import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MapComponent } from './map/map.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TrackService } from '../services/track/track.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, MapComponent],
})
export class HomePage {

  form: FormGroup;
  isSubmitted = false;
  openModal = false;

  constructor(private track: TrackService) {}

  openLocationModal() {
    this.openModal = true;
    this.formData();
  }

  formData() {
    this.form = new FormGroup({
      lat: new FormControl(null, {validators: [Validators.required]}),
      lng: new FormControl(null, {validators: [Validators.required]}),
    });
  }

  async onSubmit() {
    if(!this.form.valid) return;
    try {
      this.isSubmitted = true;
      // update location
      const source = {
        lat: this.form.value.lat,
        lng: this.form.value.lng
      };
      console.log(source);
      await this.track.updateSourceLocation(source);
      this.isSubmitted = false;
      this.openModal = false;
    } catch(e) {
      this.isSubmitted = false;
      console.log(e);
    }
  }

}
