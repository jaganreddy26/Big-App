import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarchartComponent } from './charts/barchart/barchart.component';
import { PiechartComponent } from './charts/piechart/piechart.component';
import { SemiPiechartComponent} from './charts/semipiechart/semipiechart.component';
import { ChartModule } from 'angular-highcharts';
import { DatatableComponent } from './datatable/datatable.component';
import { DataTableService} from './datatable/datatable.service';
import { HttpClientModule }    from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatInputModule } from "@angular/material/input";
import {MatCardModule} from '@angular/material/card';
import { FilterPipe } from './pipes/pipes';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,
    PiechartComponent,
    SemiPiechartComponent,
    DatatableComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartModule,
    HttpClientModule,
    FlexLayoutModule,
    MatInputModule,MatCardModule,FormsModule,MatButtonModule,MatIconModule,NgxPaginationModule,OrderModule,MatSelectModule
  ],
  providers: [DataTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
