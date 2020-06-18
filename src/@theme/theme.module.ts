import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { MainLayoutComponent } from './main/main.layout';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        CommonModule,
        HeaderComponent,
        FooterComponent,
        MainLayoutComponent
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        MainLayoutComponent
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