import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CrudService } from '../Services/crud.service';
import { Contact } from '../Entity/contact.Entity';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  ContactForm: FormGroup;

  constructor(
    private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private toast: NgToastService
  ) {
    let formControls = {
      nom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required, Validators.email]),
      sujet: new FormControl('', [Validators.required, Validators.maxLength(8)]),
      message: new FormControl('', [Validators.required])
    };

    this.ContactForm = this.fb.group(formControls);
  }

  get nom() {
    return this.ContactForm.get('nom');
  }

  get email() {
    return this.ContactForm.get('email');
  }

  get telephone() {
    return this.ContactForm.get('telephone');
  }

  get sujet() {
    return this.ContactForm.get('sujet');
  }

  get message() {
    return this.ContactForm.get('message');
  }

  addNewContact() {
    let data = this.ContactForm.value;
    console.log(data);
    let contact = new Contact(
      undefined,
      data.nom,
      data.email,
      data.telephone,
      data.sujet,
      data.message
    );
    console.log(contact);

    if (
      data.nom == 0 ||
      data.email == 0 ||
      data.telephone == 0 ||
      data.sujet == 0 ||
      data.message == 0
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Remplissez votre champ!',
        customClass: {
          confirmButton: 'custom-ok-button' // Spécifiez la classe CSS du bouton "OK"
        }
      });
    } else {
      this.service.addContact(contact).subscribe(
        res => {
          console.log(res);
          Swal.fire({
            icon: 'success',
            title: 'Succès',
            text: 'Message envoyé avec succès',
            customClass: {
              confirmButton: 'custom-ok-button' // Spécifiez la classe CSS du bouton "OK"
            }
          }).then(result => {
            if (result.isConfirmed || result.isDismissed) {
              this.router.navigate(['']).then(() => window.location.reload());
            }
          });
        },
        err => {
          Swal.fire({
            icon: 'warning',
            title: 'Attention',
            text: 'Service en panne!',
            customClass: {
              confirmButton: 'custom-ok-button' // Spécifiez la classe CSS du bouton "OK"
            }
          });
        }
      );
    }
  }
}
