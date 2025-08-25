import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
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
    rg_civil: [''],
    rg_militar: [''],
    cpf: [''],
    data_nascimento: [null],
    matricula: ['']
  });


  criarPolicial() {
    console.log(this.form.value)

    if (this.form.valid) {
      const policialData = this.form.value;
      
      this.policialService.createPolicial(policialData).subscribe({
        next: (response) => {
          console.log('Policial criado com sucesso:', response);
          // Aqui você pode adicionar lógica adicional após a criação bem-sucedida
        },
        error: (error) => {
          console.error('Erro ao criar policial:', error);
          // Aqui você pode adicionar lógica para lidar com erros
        }
      });
    }
  }


}
