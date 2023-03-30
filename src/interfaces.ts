export interface Data {
  login: {
    uuid: string;
    password: string;
  };
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  cell: string;
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
  };
  dob: {
    date: string;
  };
  email: string;
}

export interface State {
  isPass: boolean;
  isPhone: boolean;
  isMap: boolean;
  isCalendar: boolean;
  isEmail: boolean;
  isUser: boolean;
}