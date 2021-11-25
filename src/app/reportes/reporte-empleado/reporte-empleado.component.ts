import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ReporteService } from 'src/app/core/services/reporte/reporte.service';

@Component({
  selector: 'app-reporte-empleado',
  templateUrl: './reporte-empleado.component.html',
  styleUrls: ['./reporte-empleado.component.scss']
})
export class ReporteEmpleadoComponent implements OnInit {

  item= {
    iterador:0,
    id_empleado:String,
    nombre_empleado: String,
    apellido_empleado: String,
    idRol: String,
    idEstado: String,
  }
  ListaEmpleados;
  constructor(private reporteService: ReporteService) {
    this.ListaEmpleados= new Array<String>();
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
            this.item.idRol = data[i].id_rol,
            this.item.idEstado = data[i].id_estado,
            this.item.nombre_empleado = data[i].nombre_empleado,
            this.item.apellido_empleado = data[i].apellido_empleado,
            this.ListaEmpleados.push(this.item);
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
    id_empleado:String,
    nombre_empleado: String,
    apellido_empleado: String,
    idRol: String,
    idEstado: String,
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
    docResult.save('reporte_de_Empleados.pdf');
  });
}

}
