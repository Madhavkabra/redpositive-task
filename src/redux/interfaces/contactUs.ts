export interface ContactUsFormErrors {
  name?: string;
  phone?: string;
  email?: string;
}

export interface ContactUsFormFields {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface ContactUsInitialState extends ContactUsFormFields {
  errors?: ContactUsFormErrors;
}
