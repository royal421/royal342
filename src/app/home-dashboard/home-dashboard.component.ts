import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnDestroy, OnInit } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { IgcGridLite } from 'igniteui-grid-lite';
import { defineComponents } from 'igniteui-webcomponents';
import { Subject, takeUntil } from 'rxjs';
import { EmployeesType } from '../models/northwind/employees-type';
import { NorthwindService } from '../services/northwind.service';

defineComponents(IgcGridLite);

@Component({
  selector: 'app-home-dashboard',
  imports: [IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxAvatarComponent],
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeDashboardComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  public presetsListSelectedItem?: string;
  public northwindEmployees: EmployeesType[] = [];

  constructor(
    public northwindService: NorthwindService,
  ) {}


  ngOnInit() {
    this.northwindService.getEmployees().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.northwindEmployees = data;
        this.changeDetectorRef.markForCheck();
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
