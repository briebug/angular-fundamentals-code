import { UnpaidInvoicePipe } from './unpaid.invoice.pipe';

describe('UnpaidInvoicePipe', () => {
  it('create an instance', () => {
    const pipe = new UnpaidInvoicePipe();
    expect(pipe).toBeTruthy();
  });
});
