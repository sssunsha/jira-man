// This module acts as a wrapper on top of Angular Material to only import the components we need

import { NgModule } from '@angular/core';
import {
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdDialogModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdNativeDateModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdSelectModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdTabsModule
} from '@angular/material';

@NgModule({
    exports: [
        MdButtonModule,
        MdButtonToggleModule,
        MdCardModule,
        MdCheckboxModule,
        MdDatepickerModule,
        MdDialogModule,
        MdGridListModule,
        MdIconModule,
        MdInputModule,
        MdNativeDateModule,
        MdProgressBarModule,
        MdProgressSpinnerModule,
        MdRadioModule,
        MdSelectModule,
        MdSliderModule,
        MdSlideToggleModule,
        MdTabsModule
    ],
    imports: [
        MdButtonModule,
        MdButtonToggleModule,
        MdCardModule,
        MdCheckboxModule,
        MdDatepickerModule,
        MdDialogModule,
        MdGridListModule,
        MdIconModule,
        MdInputModule,
        MdNativeDateModule,
        MdProgressBarModule,
        MdProgressSpinnerModule,
        MdRadioModule,
        MdSelectModule,
        MdSliderModule,
        MdSlideToggleModule,
        MdTabsModule
    ]
})
export class AngularMaterialModule {}
