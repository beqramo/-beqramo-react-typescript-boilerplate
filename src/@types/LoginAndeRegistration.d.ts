type RegistrationFormType = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
  stayLoggedIn: boolean;
  password_confirmation: string;
};

type loginFormType = {
  email: string;
  password: string;
  stayLoggedIn: boolean;
};

type AddCompanyFormType = {
  name: string;
  address: string;
  country_iso: string;
  region: string;
  city: string;
  postal_code: string;
};
