import { NoLayoutComponent } from './main/no.layout';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { MainLayoutComponent } from './main/main.layout';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule
    ],
    exports: [
        CommonModule,
        HeaderComponent,
        FooterComponent,
        MainLayoutComponent,
        NoLayoutComponent
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        MainLayoutComponent,
        NoLayoutComponent
    ]
})

export class ThemeModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ThemeModule,
            providers: []
        };
    }
}