import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ReporteService } from 'src/app/core/services/reporte/reporte.service';
@Component({
  selector: 'app-reporte-consulta',
  templateUrl: './reporte-consulta.component.html',
  styleUrls: ['./reporte-consulta.component.scss']
})
export class ReporteConsultaComponent implements OnInit {
  item= {
    iterador:0,
    dpi_usuario:String,
    id_usuario:String,
    nombre_usuario: String,
    apellido_usuario: String,
    tiene_credito:String,
    estado_credito:String,
  }
  ListaConsultas;
  constructor(private reporteService: ReporteService) {
    this.ListaConsultas= new Array<String>();
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
            this.item.id_usuario = data[i].id_usuario,
            this.item.dpi_usuario = data[i].dpi_usuario,
            this.item.nombre_usuario = data[i].nombre_usuario,
            this.item.apellido_usuario = data[i].apellido_usuario,
            this.item.tiene_credito = data[i].tiene_credito,
            this.item.estado_credito = data[i].estado_credito,
            this.ListaConsultas.push(this.item);
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
  id_usuario:String,
  nombre_usuario: String,
  apellido_usuario: String,
  tiene_credito:String,
  estado_credito:String,
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
