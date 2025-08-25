import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PoliciaisService } from '../../services/policiais.service';

@Component({
  selector: 'app-form-inclusao',
  imports: [ReactiveFormsModule],
  templateUrl: './form-inclusao.component.html',
  styleUrl: './form-inclusao.component.css'
})
export class FormInclusaoComponent {


  fb = inject(FormBuilder)
  policialService = inject(PoliciaisService)

  form = this.fb.group({
    rg_civil: this.fb.control('',[Validators.required]),
    rg_militar: this.fb.control('',[Validators.required]),
    cpf: this.fb.control('',[Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    data_nascimento: this.fb.control('',[Validators.required]),
    matricula: this.fb.control('',[Validators.required])
  });


  criarPolicial() {

    if (this.form.valid) {
      const policialData = this.form.value;
      
      this.policialService.createPolicial(policialData).subscribe({
        next: (response) => {
            this.policialService.policiaisList.unshift(response);
        },
        error: (error) => {
          alert(error.error.error);
        }
      });
    }
  }


}
