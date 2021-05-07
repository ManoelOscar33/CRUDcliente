import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
//import { Observable } from 'rxjs';
import { ClienteModel } from './cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers: [ClientesService]
})
export class ClienteComponent implements OnInit {

  cliente: ClienteModel = new ClienteModel();
  clientes: any[] = new Array();

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.listarClientes();
  }

  atualizar(id: number){
    this.clientesService.atualizarCliente(id, this.cliente).subscribe((cliente: any[]) => {
      this.cliente = new ClienteModel();
      this.listarClientes();
    }, (err: any) => {
       console.log('Erro ao atualizar o cliente', err);
    })
  }

  remover(id: number){
    this.clientesService.removerCliente(id).subscribe((cliente: any[]) => {
      this.cliente = new ClienteModel();
      this.listarClientes();
    }, (err: any) => {
       console.log('Erro ao remover o cliente', err);
    })
  }

  cadastrar(){
    console.log(this.cliente);
    this.clientesService.cadastrarCliente(this.cliente).subscribe((cliente: any[]) => {
      this.cliente = new ClienteModel();
      this.listarClientes();
    }, (err: any) => {
       console.log('Erro ao cadastrar o cliente', err);
    })
  }

  listarClientes(){
    this.clientesService.listarClientes().subscribe((clientes: any[]) => {
      this.clientes = clientes;
    }, (err: any) => {
       console.log('Erro ao listar os clientes', err);
    })

  }

}
