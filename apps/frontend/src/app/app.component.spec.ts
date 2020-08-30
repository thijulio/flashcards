import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutComponent } from '@flashcards/frontend/app-layout';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MockComponent, MockPipe } from 'ng-mocks';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let translateService: TranslateService;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AppComponent, MockComponent(LayoutComponent), MockPipe(TranslatePipe)],
            providers:[{provide: TranslateService, useValue:{setDefaultLang: jest.fn(), use: jest.fn()}}]
            
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        translateService = TestBed.inject(TranslateService);
    }));

    test('should create the app', () => {
        expect(component).toBeFalsy();
    });

    test('should setup translations', ()=>{
        expect(translateService.setDefaultLang).toHaveBeenCalledWith('en');
        expect(translateService.use).toHaveBeenCalledWith('en');
    })
});
