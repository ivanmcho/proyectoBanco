import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ReporteService } from 'src/app/core/services/reporte/reporte.service';

@Component({
  selector: 'app-reporte-credito',
  templateUrl: './reporte-credito.component.html',
  styleUrls: ['./reporte-credito.component.scss']
})
export class ReporteCreditoComponent implements OnInit {

  item= {
    iterador:0,
    dpi_usuario:String,
    id_empleado:String,
    nombre_usuario: String,
    apellido_usuario: String,
    cuotas_credito:String,
    cantidad_credito:String,
    empleado:String,
    idEstado: String,
    estado:String,
  }
  ListaCreditos;
  constructor(private reporteService: ReporteService) {
    this.ListaCreditos= new Array<String>();
    this.consultarReporteUsuario();
    this.downloadPDF();
   }
   consultarReporteUsuario(): void {
    this.reporteService.consultarReporteEmpleado().subscribe(
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
            this.item.id_empleado = data[i].id_empleado,
            this.item.idEstado = data[i].id_estado,
            this.item.dpi_usuario = data[i].dpi_usuario,
            this.item.nombre_usuario = data[i].nombre_usuario,
            this.item.apellido_usuario = data[i].apellido_usuario,
            this.item.cantidad_credito = data[i].cantidad_credito,
            this.item.cuotas_credito = data[i].cuotas_credito,
            this.item.empleado = data[i].empleado,
            this.item.estado = data[i].estado
            this.ListaCreditos.push(this.item);
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
  dpi_usuario:String,
  id_empleado:String,
  nombre_usuario: String,
  apellido_usuario: String,
  cuotas_credito:String,
  cantidad_credito:String,
  empleado:String,
  idEstado: String,
  estado:String,
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
    docResult.save('reporte_de_Creditos.pdf');
  });
}

}
