import { Component, inject } from '@angular/core';
import { ShopService } from '../../../core/services/shop.service';
import { MatDivider, MatListOption, MatSelectionList } from '@angular/material/list';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  standalone:true,
  imports: [
    MatDivider,
    MatSelectionList,
    MatListOption,
    MatButton,
    FormsModule
],
  selector: 'app-fillters-dialog',
  styleUrl: './fillters-dialog.component.scss',
  templateUrl: './fillters-dialog.component.html',
})
export class FilltersDialogComponent {
  shopService = inject(ShopService);
  private dialogRef =inject(MatDialogRef<FilltersDialogComponent>);
  data = inject(MAT_DIALOG_DATA);

  selectedBrands: string[] = this.data.selectedBrands;
  selectedTypes: string[] = this.data.selectedTypes;

  applyFilters(){
    this.dialogRef.close({
      selectedBrands: this.selectedBrands,
      selectedTypes:this.selectedTypes
    })
  }
}
