import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PaviProject';

  // selectScheme = [
  //   { sno: 1 },
  //   { sno: 2 },
  //   { sno: 3 },
  //   { sno: 4 },
  //   { sno: 'All' },
  // ];

  // subScheme = [
  //   { sno: 1 },
  //   { sno: 2 },
  //   { sno: 3 },
  //   { sno: 4 },
  //   { sno: 'All' },
  // ];

  // batchType = [
  //   { sno: 'Batch1' },
  //   { sno: 'Batch2' },
  //   { sno: 'Batch3' },
  //   { sno: 'Batch4' },
  //   { sno: 'Batch5' },
  // ];

  // state = [
  //   { sno: 'TamilNadu' },
  //   { sno: 'Karnataka' },
  //   { sno: 'AndraPradesh' },
  //   { sno: 'Kerala' },
  //   { sno: 'Telugana' },
  // ];

  // jobRole = [
  //   { sno: 'JobRole-1' },
  //   { sno: 'JobRole-2' },
  //   { sno: 'JobRole-3' },
  //   { sno: 'JobRole-4' },
  //   { sno: 'JobRole-5' },
  // ];

  selectScheme = [
    { sno: 1 },
    { sno: 2 },
    { sno: 3 },
    { sno: 4 },
    { sno: 'All' },
  ];

  subScheme = [
    { sno: 1 },
    { sno: 2 },
    { sno: 3 },
    { sno: 4 },
    { sno: 'All' },
  ];

  batchType = [
    { sno: 'Batch1' },
    { sno: 'Batch2' },
    { sno: 'Batch3' },
    { sno: 'Batch4' },
    { sno: 'Batch5' },
  ];

  state = [
    { sno: 'TamilNadu' },
    { sno: 'Karnataka' },
    { sno: 'AndraPradesh' },
    { sno: 'Kerala' },
    { sno: 'Telugana' },
  ];

  jobRole = [
    { sno: 'JobRole-1' },
    { sno: 'JobRole-2' },
    { sno: 'JobRole-3' },
    { sno: 'JobRole-4' },
    { sno: 'JobRole-5' },
  ];

  assessmentType = [
    { sno: 'Assessment' },
    { sno: 'Re- Assessment ' },
    { sno: 'All' },
  ];

  invoiceStatus = [
    { sno: 'Generated ' },
    { sno: 'Verified by SSC/ AB' },
    { sno: 'All' },
  ];
}
