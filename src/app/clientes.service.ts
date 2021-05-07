import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteModel } from './cliente/cliente.model';

@Injectable()
export class ClientesService {

  constructor(private http: HttpClient) { }

  cadastrarCliente(cliente: ClienteModel): Observable<any>{
    return this.http.post("http://localhost:3000/clientes/", cliente);
  }

  listarClientes(): Observable<any>{
    return this.http.get("http://localhost:3000/clientes/");
  }

  atualizarCliente(id: any, cliente: ClienteModel): Observable<any>{
    return this.http.put("http://localhost:3000/clientes/".concat(id), cliente);
  }

  removerCliente(id: any){
    return this.http.delete("http://localhost:3000/clientes/".concat(id));
  }

}
