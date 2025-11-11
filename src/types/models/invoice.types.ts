export interface InvoiceUser {
  name: string;
  location: string;
  phone: string;
  email: string;
  ssn: string;
}

export interface InvoiceEvent {
  name: string;
  venue: string;
  jobNumber: string;
  date: string;
  position: string;
}

export interface InvoiceDetails {
  clockIn: string;
  mealBreak: string;
  clockOut: string;
  rate: string;
  regHrs: string;
  otHrs: string;
  dtHrs: string;
  perDiem: string;
}

export interface InvoiceMockData {
  user: InvoiceUser;
  event: InvoiceEvent;
  invoice: InvoiceDetails;
  serviceFeePercentage: number;
}
