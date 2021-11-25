import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ReporteService } from 'src/app/core/services/reporte/reporte.service';

@Component({
  selector: 'app-reporte-usuario',
  templateUrl: './reporte-usuario.component.html',
  styleUrls: ['./reporte-usuario.component.scss']
})
export class ReporteUsuarioComponent implements OnInit {

  item= {
    iterador:0,
    user: String,
    pass: String,
    nombre: String,
    apellido: String,
    ahorro_usuario:Number,
    direccion: String,
    telefono: String,
    idRol: Number,
    idEstado: Number,
    idRol_usuario: String,
    idEstado_usuario: String,
  }
  ListaUsuarios;
  constructor(private reporteService: ReporteService) {
    this.ListaUsuarios= new Array<String>();
    this.consultarReporteUsuario();
    this.downloadPDF();
   }
   consultarReporteUsuario(): void {
    this.reporteService.consultarReporteUsuario().subscribe(
      (res) => {
        const data: any = res;
        if (data!= null) {
          if (data.length == 0) {
            alert('Error al consultar el rporte del usuario');
          } else {
           for (let i = 0; i < data.length; i++) {
         //   this.item.pass = data[0].password
            let iterador=i+1;
            this.item.iterador= iterador,
            this.item.idRol = data[i].id_rol,
            this.item.idEstado = data[i].id_estado,
            this.item.nombre = data[i].nombre_usuario,
            this.item.apellido = data[i].apellido_usuario,
            this.item.direccion = data[i].direccion_usuario,
            this.item.telefono = data[i].telefono_usuario,
            this.item.ahorro_usuario = data[i].ahorro_usuario
            this.item.idRol_usuario = data[i].rol,
            this.item.idEstado_usuario = data[i].estado
            this.ListaUsuarios.push(this.item);
            this.resetearItem();
           }
          }
        }
      },
      (error) => {
        alert('Error al consultar el usuario');
      }
    );
  }

resetearItem(){
 this.item= {
  iterador:0,
  user: String,
  pass: String,
  nombre: String,
  apellido: String,
  ahorro_usuario:Number,
  direccion: String,
  telefono: String,
  idRol: Number,
  idEstado: Number,
  idRol_usuario: String,
  idEstado_usuario: String,
}
}

  ngOnInit(): void {
  }




/**
   * Metodo que crea y descarga el pdf
   */
 public downloadPDF(): void {
  const DATA = document.getElementById('htmlData') as HTMLElement;
  const doc = new jsPDF('p', 'pt', 'a4');
  const options = {
    background: 'white',
    scale: 3
  };
  html2canvas(DATA, options).then((canvas) => {
    const img = canvas.toDataURL('image/PNG');
    // Add image Canvas to PDF
    const bufferX = 15;
    const bufferY = 15;
    const imgProps = (doc as any).getImageProperties(img);
    const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
    return doc;
  }).then((docResult) => {
    docResult.save('reporte_de_Cuenta_Habientes.pdf');
  });
}



}

