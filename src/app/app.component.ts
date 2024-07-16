import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutocompleteComponent } from './componentes/autocomplete/autocomplete.component';
import { BadgeComponent } from './componentes/badge/badge.component';
import { BottomSheetComponent } from './componentes/bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './componentes/button/button.component';
import { ButtonToggleComponent } from './componentes/button-toggle/button-toggle.component';
import { CardComponent } from './componentes/card/card.component';
import { CheckboxComponent } from './componentes/checkbox/checkbox.component';
import { ChipsComponent } from './componentes/chips/chips.component';
import { DatePickerComponent } from './componentes/date-picker/date-picker.component';
import { DialogComponent } from './componentes/dialog/dialog.component';
import { DividerComponent } from './componentes/divider/divider.component';
import { ExpansionPanelComponent } from './componentes/expansion-panel/expansion-panel.component';
import { FormFieldComponent } from './componentes/form-field/form-field.component';
import { GrisListComponent } from './componentes/gris-list/gris-list.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { IconsComponent } from './componentes/icons/icons.component';
import { InputsComponent } from './componentes/inputs/inputs.component';
import { ListsComponent } from './componentes/lists/lists.component';
import { PaginatorsComponent } from './componentes/paginators/paginators.component';
import { ProgressBarComponent } from './componentes/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './componentes/progress-spinner/progress-spinner.component';
import { RadioButtonComponent } from './componentes/radio-button/radio-button.component';
import { RipplesComponent } from './componentes/ripples/ripples.component';
import { SelectComponent } from './componentes/select/select.component';
import { SideNavComponent } from './componentes/side-nav/side-nav.component';
import { SlideToggleComponent } from './componentes/slide-toggle/slide-toggle.component';
import { SliderComponent } from './componentes/slider/slider.component';
import { SnackBarComponent } from './componentes/snack-bar/snack-bar.component';
import { StepperComponent } from './componentes/stepper/stepper.component';
import { TabbleComponent } from './componentes/tabble/tabble.component';
import { TabsComponent } from './componentes/tabs/tabs.component';
import { ToolBarComponent } from './componentes/tool-bar/tool-bar.component';
import { TreeComponent } from './componentes/tree/tree.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AutocompleteComponent,
    BadgeComponent, BottomSheetComponent,
    ButtonComponent, ButtonToggleComponent,
    CardComponent, CheckboxComponent,
    ChipsComponent, DatePickerComponent,
    DialogComponent, DividerComponent,
    ExpansionPanelComponent, FormFieldComponent,
    GrisListComponent, MenuComponent,
    IconsComponent, InputsComponent,
    ListsComponent, PaginatorsComponent,
    ProgressBarComponent, ProgressSpinnerComponent,
    RadioButtonComponent, RipplesComponent,
    SelectComponent, SideNavComponent,
    SlideToggleComponent, SliderComponent,
    SnackBarComponent, StepperComponent,
    TabbleComponent, TabsComponent,
    ToolBarComponent, TreeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Unidad2';
}
