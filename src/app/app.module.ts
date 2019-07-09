import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { SettingModule} from './pages/setting/setting.module';
import { SetupModule } from './pages/setup/setup.module';
import { MainModule } from './pages/main/main.module';
import { SummaryModule } from './pages/summary/summary.module';

// services
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { ListService } from './services/list/list.service';
import { TodoService } from './services/todo/todo.service';
import { InitGuardService } from './services/init-guard/init-guard.service';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SetupModule,
    SummaryModule,
    SettingModule,
    MainModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
