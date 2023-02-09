import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent {
  transferencias: any[] = [];

  constructor(private service: TransferenciaService) {}

  ngOnInit() {
    this.service.todasTransferencias().subscribe((transferencias: Transferencia[]) =>{
      console.table(transferencias);
      this.transferencias = transferencias;
    })
  }
}
