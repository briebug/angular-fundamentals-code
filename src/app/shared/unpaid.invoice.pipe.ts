import { Pipe, PipeTransform } from "@angular/core";

class Invoice {
  id: number;
  paid: boolean;
}

@Pipe({
  name: "unpaidInvoice"
})
export class UnpaidInvoicePipe implements PipeTransform {
  transform(value: Invoice[]): Invoice[] {
    return value.filter(invoice => !invoice.paid);
  }
}
