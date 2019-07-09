import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { NgZorroAntdModule } from 'ng-zorro-antd';


import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { LeftControlComponent } from './left-control/left-control.component';
import { RightControlComponent } from './right-control/right-control.component';
import { DatailComponent } from './datail/datail.component';
import { ListComponent } from './left-control/list/list.component';
import { HeaderComponent } from './right-control/header/header.component';
import { SuggestComponent } from './right-control/header/suggest/suggest.component';
import { QuickAddComponent } from './right-control/quick-add/quick-add.component';
import { TodoComponent } from './right-control/todo/todo.component';


@NgModule({
  declarations: [
    MainComponent,
    LeftControlComponent,
    RightControlComponent,
    DatailComponent,
    ListComponent,
    HeaderComponent,
    SuggestComponent,
    QuickAddComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgZorroAntdModule,
    FormsModule
  ]
})
export class MainModule { }
