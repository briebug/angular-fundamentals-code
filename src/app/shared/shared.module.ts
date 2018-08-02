import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EllipsesPipe } from "./ellipses.pipe";
import { UnpaidInvoicePipe } from './unpaid.invoice.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [EllipsesPipe, UnpaidInvoicePipe],
  exports: [EllipsesPipe]
})
export class SharedModule {}
