import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Account = {
  __typename?: 'Account';
  account_id: Scalars['String'];
  account_value: Scalars['String'];
  account_des: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type AccountOption = {
  account: Scalars['String'];
  desc: Scalars['String'];
};

export type ClassCampus = {
  __typename?: 'ClassCampus';
  class_campus_id: Scalars['String'];
  class_campus_name: Scalars['String'];
  class_campus_status: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ConnectedResMoneyMovementOne = {
  __typename?: 'ConnectedResMoneyMovementOne';
  full_name: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  phone_number: Scalars['String'];
  gender: Scalars['String'];
  address: Scalars['String'];
  place_of_birth: Scalars['String'];
  date_of_birth: Scalars['DateTime'];
  school_year_value: Scalars['String'];
  profession: Scalars['String'];
  province_name: Scalars['String'];
  district_or_city_name: Scalars['String'];
  religion_name: Scalars['String'];
  total_investment: Scalars['Float'];
  class_campus_name: Scalars['String'];
  major_code: Scalars['String'];
  major: Scalars['String'];
  class_name?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export type DataFromReqCode = {
  __typename?: 'DataFromReqCode';
  inforeq: InfoRreCodes;
  stateToken: Scalars['String'];
  error: FieldError;
};

export type DataUser = {
  __typename?: 'DataUser';
  user_id: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  user_photo?: Maybe<Scalars['String']>;
  user_status: Scalars['String'];
  role?: Maybe<Scalars['String']>;
};

export type DateFromAndTo = {
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};


export type EducationList = {
  __typename?: 'EducationList';
  education_list_id: Scalars['String'];
  education: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type FieldError = {
  __typename?: 'FieldError';
  message: Scalars['String'];
};

export type FieldErrorRes = {
  __typename?: 'FieldErrorRes';
  message: Scalars['String'];
};

export type GroupAccount = {
  __typename?: 'GroupAccount';
  group_account_id: Scalars['String'];
  id_sub_account: Scalars['String'];
  group_account_value: Scalars['String'];
  group_account_des: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type IdClassCampusTypeInput = {
  id_class_campus: Scalars['String'];
};

export type IdMajorsTypeInput = {
  id_major: Scalars['String'];
};

export type IdTransactionsTypeInput = {
  id: Scalars['String'];
};

export type IdTypeInput = {
  id: Scalars['String'];
};

export type InUserInputId = {
  id: Scalars['String'];
};

export type InfoNewProspectiveStudents = {
  __typename?: 'InfoNewProspectiveStudents';
  reg_code: Scalars['String'];
  concerned_id: Scalars['String'];
};

export type InfoRreCodes = {
  __typename?: 'InfoRreCodes';
  prospective_students_id: Scalars['String'];
  reg_code: Scalars['String'];
  full_name: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  phone_number: Scalars['String'];
  religion?: Maybe<Scalars['String']>;
  district_or_city?: Maybe<Scalars['String']>;
  address: Scalars['String'];
  graduation_year: Scalars['String'];
  school_origin: Scalars['String'];
  major?: Maybe<Scalars['String']>;
  school_year?: Maybe<Scalars['String']>;
  date_registration: Scalars['String'];
  total_investment: Scalars['String'];
};

export type InputId = {
  id: Scalars['String'];
};

export type InputIMark = {
  id: Scalars['String'];
  mark: Scalars['String'];
};

export type InputMenuSubmit = {
  id_path: Scalars['String'];
  role_id: Scalars['String'];
  menu_name: Scalars['String'];
  menu_icon: Scalars['String'];
  menu_type: Scalars['String'];
  menu_status: Scalars['String'];
};

export type InputNote = {
  id: Scalars['String'];
  note?: Maybe<Scalars['String']>;
};

export type InputProspectiveStudentsProses = {
  id: Scalars['String'];
  further_process: Scalars['String'];
};

export type InputSubmenu = {
  role_id: Scalars['String'];
  sub_name_menu: Scalars['String'];
  menu_name: Scalars['String'];
  url: Scalars['String'];
};

export type ListMajors = {
  __typename?: 'ListMajors';
  list_major_id: Scalars['String'];
  id_class_campus: Scalars['String'];
  major_code: Scalars['String'];
  major: Scalars['String'];
  major_image: Scalars['String'];
  major_desc: Scalars['String'];
  list_major_status: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ListPrice = {
  __typename?: 'ListPrice';
  list_price_id: Scalars['String'];
  id_major: Scalars['String'];
  list_price_desc: Scalars['String'];
  list_price_value: Scalars['String'];
  list_price_status: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type MarkMoneyOption = {
  id: Scalars['String'];
  mark: Scalars['String'];
};

export type MoneyMovement = {
  __typename?: 'MoneyMovement';
  money_movement_id: Scalars['String'];
  connected: Scalars['String'];
  posted: Scalars['String'];
  account: Scalars['String'];
  ref: Scalars['String'];
  proof: Scalars['String'];
  amount: Scalars['String'];
  return_amount: Scalars['String'];
  money_movement_des: Scalars['String'];
  money_movement_type: Scalars['String'];
  movement_to_type: Scalars['String'];
  mark: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type MoneyOption = {
  id: Scalars['String'];
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  ProvineCreate: Province;
  PublicAuth: ResponsePublicAuth;
  ListMajorsRegister: Array<ListMajors>;
  RegistrationSubmit: InfoNewProspectiveStudents;
  RegistrationTransactionsCreate: ResponeRegTrans;
  removeaccountone: Scalars['Boolean'];
  submitaccount: Account;
  submitupdateaccount: Account;
  markmoneymovement?: Maybe<MoneyMovement>;
  postedmoneymovement?: Maybe<MoneyMovement>;
  changereturnamountmoney?: Maybe<MoneyMovement>;
  menusubmit: Menu;
  submenusubmit: Submenu;
  login?: Maybe<UsersRespone>;
  logout: Scalars['Boolean'];
  newuser: Users;
  ProspectiveStudentsProsessDrakAndDrop: Scalars['Boolean'];
  RoleCgangeStatus?: Maybe<UserRoles>;
  noteprospectivestudents: Scalars['Boolean'];
  markprospectivestudents: Scalars['Boolean'];
};


export type MutationProvineCreateArgs = {
  options: ProvinceTypeInput;
};


export type MutationPublicAuthArgs = {
  options: PublicAuthTypeInput;
};


export type MutationListMajorsRegisterArgs = {
  options: IdClassCampusTypeInput;
};


export type MutationRegistrationSubmitArgs = {
  options: RegisterationTypeInput;
};


export type MutationRegistrationTransactionsCreateArgs = {
  options: TransactionsTypeInput;
};


export type MutationRemoveaccountoneArgs = {
  options: IdTransactionsTypeInput;
};


export type MutationSubmitaccountArgs = {
  options: AccountOption;
};


export type MutationSubmitupdateaccountArgs = {
  options: UpdtateAccountOption;
};


export type MutationMarkmoneymovementArgs = {
  options: MarkMoneyOption;
};


export type MutationPostedmoneymovementArgs = {
  options: IdTransactionsTypeInput;
};


export type MutationChangereturnamountmoneyArgs = {
  options: MarkMoneyOption;
};


export type MutationMenusubmitArgs = {
  options: InputMenuSubmit;
};


export type MutationSubmenusubmitArgs = {
  options: InputSubmenu;
};


export type MutationLoginArgs = {
  options: UserInputLogin;
};


export type MutationNewuserArgs = {
  options: UserInputNewUser;
};


export type MutationProspectiveStudentsProsessDrakAndDropArgs = {
  options: InputProspectiveStudentsProses;
};


export type MutationRoleCgangeStatusArgs = {
  options: InputId;
};


export type MutationNoteprospectivestudentsArgs = {
  options: InputNote;
};


export type MutationMarkprospectivestudentsArgs = {
  options: InputIMark;
};

export type Payments = {
  __typename?: 'Payments';
  payment_id: Scalars['String'];
  payment_type: Scalars['String'];
  destination_pay: Scalars['String'];
  destination_name: Scalars['String'];
  destination_image: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Profession = {
  __typename?: 'Profession';
  profession_id: Scalars['String'];
  profession: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ProspectiveStudents = {
  __typename?: 'ProspectiveStudents';
  prospective_students_id: Scalars['String'];
  reg_code: Scalars['String'];
  full_name: Scalars['String'];
  place_of_birth: Scalars['String'];
  date_of_birth: Scalars['DateTime'];
  gender: Scalars['String'];
  email: Scalars['String'];
  phone_number: Scalars['String'];
  school_origin: Scalars['String'];
  address: Scalars['String'];
  postal_code_number: Scalars['String'];
  parents_name: Scalars['String'];
  house_phone_number: Scalars['String'];
  graduation_year: Scalars['String'];
  date_come: Scalars['DateTime'];
  total_investment: Scalars['String'];
  registration_status: Scalars['String'];
  date_registration: Scalars['DateTime'];
  dp_status: Scalars['String'];
  date_dp: Scalars['DateTime'];
  amount_dp: Scalars['String'];
  id_school_year: Scalars['String'];
  parents_profession: Scalars['String'];
  id_education_list: Scalars['String'];
  id_district_or_city: Scalars['String'];
  id_religion: Scalars['String'];
  id_source_info: Scalars['String'];
  id_wave_register: Scalars['String'];
  id_major: Scalars['String'];
  id_presenter: Scalars['String'];
  further_process: Scalars['String'];
  date_finis_further_process: Scalars['String'];
  note: Scalars['String'];
  mark: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ProspectiveStudentsRespon = {
  __typename?: 'ProspectiveStudentsRespon';
  prospective_students_id: Scalars['String'];
  reg_code?: Maybe<Scalars['String']>;
  full_name: Scalars['String'];
  place_of_birth: Scalars['String'];
  date_of_birth: Scalars['DateTime'];
  gender: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  phone_number: Scalars['String'];
  school_origin: Scalars['String'];
  address: Scalars['String'];
  postal_code_number?: Maybe<Scalars['String']>;
  parents_name: Scalars['String'];
  house_phone_number: Scalars['String'];
  graduation_year: Scalars['String'];
  date_come: Scalars['DateTime'];
  total_investment?: Maybe<Scalars['String']>;
  registration_status: Scalars['String'];
  date_registration?: Maybe<Scalars['DateTime']>;
  dp_status: Scalars['String'];
  date_dp?: Maybe<Scalars['DateTime']>;
  amount_dp: Scalars['String'];
  school_year_value: Scalars['String'];
  profession: Scalars['String'];
  education: Scalars['String'];
  province_name: Scalars['String'];
  district_or_city_name: Scalars['String'];
  religion_name: Scalars['String'];
  source_information_name: Scalars['String'];
  wave: Scalars['String'];
  wave_desc: Scalars['String'];
  class_campus_name: Scalars['String'];
  major_code: Scalars['String'];
  major: Scalars['String'];
  presenter_name?: Maybe<Scalars['String']>;
  further_process: Scalars['String'];
  date_finis_further_process?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  mark: Scalars['String'];
};

export type ProspectiveStudentsaInfoCost = {
  __typename?: 'ProspectiveStudentsaInfoCost';
  prospective_students_id: Scalars['String'];
  reg_code: Scalars['String'];
  id_class_campus: Scalars['String'];
  class_campus: Scalars['String'];
  wave: Scalars['String'];
  wave_desc: Scalars['String'];
  year?: Maybe<Scalars['String']>;
};

export type Province = {
  __typename?: 'Province';
  province_id: Scalars['String'];
  province_name: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ProvinceTypeInput = {
  province_name: Scalars['String'];
};

export type PublicAuthTypeInput = {
  reg_code: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  Province?: Maybe<ResProv>;
  majorFromClassCampus: Array<ListMajors>;
  Presenters: Array<Presenter>;
  Provinces: Array<Province>;
  ProvinceDistrict?: Maybe<Array<ResDisttrictProv>>;
  prospectiveInfo: ProspectiveStudentsaInfoCost;
  totalPrices: TPrices;
  paymenttypes: Array<Payments>;
  StataeCode: DataFromReqCode;
  SourceInfoOne?: Maybe<SourceInformation>;
  SourceInfo: Array<SourceInformation>;
  ClassOpenRegister: Array<ClassCampus>;
  Profession: Array<Profession>;
  ReligionRegister: Array<Religion>;
  EducationListRegister: Array<EducationList>;
  WavetRegister: WaveRegistration;
  SchoolYearRegister: SchoolYear;
  TransactionsState: TransactionsVa;
  ListMajorSite: Array<ListMajors>;
  ListPricesRegister?: Maybe<Array<ListPrice>>;
  gettransaction: Array<Transactions>;
  trasactionone?: Maybe<ResTrasOne>;
  gethistorytransaction: Array<Transactions>;
  getaccount: Array<Account>;
  getaccountone: Account;
  subaccountwhereaccount: Array<SubAccount>;
  subaccountaccountall: Array<ResSubAccount>;
  groupaccountwhereaccount: Array<GroupAccount>;
  moneymovementsum?: Maybe<SumMoneyMovement>;
  totalmoneymovementsum?: Maybe<SumMoneyMovement>;
  ledger: Array<ResLedger>;
  moneymovement: Array<ResLedger>;
  moneymovementone?: Maybe<ResMoneyMovementOneFinance>;
  moneymovementhistory: Array<ResLedger>;
  paths: Array<Pathurl>;
  menulist: Array<MenuListRespon>;
  submenulist: Array<SubmenuRespon>;
  menus: Array<MenuRespon>;
  submenu: Array<SubmenuRespon>;
  users: Array<UsersRes>;
  userdataAuth?: Maybe<RestAuthSession>;
  ProspectiveStudentsProsessWaiting: Array<ProspectiveStudents>;
  ProspectiveStudentsProsessWrite: Array<ProspectiveStudents>;
  ProspectiveStudentsProsessInterview: Array<ProspectiveStudents>;
  ProspectiveStudentsProsessUniform: Array<ProspectiveStudents>;
  ProspectiveStudentsProsessDone: Array<ProspectiveStudents>;
  roles: Array<UserRoles>;
  prospectivestudents: Array<ProspectiveStudentsRespon>;
  prospectivestudentsone?: Maybe<ProspectiveStudentsRespon>;
};


export type QueryProvinceArgs = {
  options: ReqProvId;
};


export type QueryMajorFromClassCampusArgs = {
  options: IdClassCampusTypeInput;
};


export type QueryProvinceDistrictArgs = {
  options: ReqProvId;
};


export type QueryTotalPricesArgs = {
  options: IdTypeInput;
};


export type QuerySourceInfoOneArgs = {
  options: IdTypeInput;
};


export type QueryTransactionsStateArgs = {
  options: IdTypeInput;
};


export type QueryListPricesRegisterArgs = {
  options: IdMajorsTypeInput;
};


export type QueryTrasactiononeArgs = {
  options: IdTransactionsTypeInput;
};


export type QueryGethistorytransactionArgs = {
  options: IdTransactionsTypeInput;
};


export type QueryGetaccountoneArgs = {
  options: IdTransactionsTypeInput;
};


export type QuerySubaccountwhereaccountArgs = {
  options: IdTransactionsTypeInput;
};


export type QueryGroupaccountwhereaccountArgs = {
  options: IdTransactionsTypeInput;
};


export type QueryMoneymovementsumArgs = {
  options: MoneyOption;
};


export type QueryTotalmoneymovementsumArgs = {
  options: DateFromAndTo;
};


export type QueryLedgerArgs = {
  options: DateFromAndTo;
};


export type QueryMoneymovementArgs = {
  options: DateFromAndTo;
};


export type QueryMoneymovementoneArgs = {
  options: IdTransactionsTypeInput;
};


export type QueryMoneymovementhistoryArgs = {
  options: IdTransactionsTypeInput;
};


export type QueryMenulistArgs = {
  options: InUserInputId;
};


export type QuerySubmenulistArgs = {
  options: InUserInputId;
};


export type QuerySubmenuArgs = {
  options: InUserInputId;
};


export type QueryProspectivestudentsoneArgs = {
  options: InputId;
};

export type RegisterationTypeInput = {
  full_name: Scalars['String'];
  place_of_birth: Scalars['String'];
  date_of_birth: Scalars['String'];
  gender: Scalars['String'];
  email: Scalars['String'];
  phone_number: Scalars['String'];
  school_origin: Scalars['String'];
  address: Scalars['String'];
  postal_code_number: Scalars['String'];
  parents_name: Scalars['String'];
  house_phone_number: Scalars['String'];
  graduation_year: Scalars['String'];
  id_school_year: Scalars['String'];
  parents_profession: Scalars['String'];
  id_education_list: Scalars['String'];
  id_district_or_city: Scalars['String'];
  id_religion: Scalars['String'];
  id_source_info: Scalars['String'];
  id_wave_register: Scalars['String'];
  id_major: Scalars['String'];
  id_presenter: Scalars['String'];
};

export type Religion = {
  __typename?: 'Religion';
  religion_id: Scalars['String'];
  religion_name: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ReqProvId = {
  province_id: Scalars['String'];
};

export type ResDisttrictProv = {
  __typename?: 'ResDisttrictProv';
  district_or_city_id?: Maybe<Scalars['String']>;
  district_or_city_name?: Maybe<Scalars['String']>;
};

export type ResLedger = {
  __typename?: 'ResLedger';
  money_movement_id: Scalars['String'];
  account: Scalars['String'];
  ref?: Maybe<Scalars['String']>;
  connected?: Maybe<Scalars['String']>;
  posted: Scalars['Boolean'];
  mark: Scalars['String'];
  proof: Scalars['String'];
  amount: Scalars['Float'];
  return_amount: Scalars['Float'];
  money_movement_des: Scalars['String'];
  money_movement_type: Scalars['String'];
  group_account_value: Scalars['String'];
  group_account_des: Scalars['String'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export type ResMoneyMovementOneFinance = {
  __typename?: 'ResMoneyMovementOneFinance';
  money_movement?: Maybe<ResLedger>;
  connected_value?: Maybe<ConnectedResMoneyMovementOne>;
};

export type ResProv = {
  __typename?: 'ResProv';
  province_id?: Maybe<Scalars['String']>;
  province_name: Scalars['String'];
};

export type ResSubAccount = {
  __typename?: 'ResSubAccount';
  sub_account_id: Scalars['String'];
  id_account: Scalars['String'];
  sub_account_value: Scalars['String'];
  sub_account_des: Scalars['String'];
  account_value?: Maybe<Scalars['String']>;
};

export type ResTrasOne = {
  __typename?: 'ResTrasOne';
  transaction_id: Scalars['String'];
  id_payment: Scalars['String'];
  concerned_id: Scalars['String'];
  merchant_id: Scalars['String'];
  gross_amount: Scalars['String'];
  amount: Scalars['String'];
  va_number: Scalars['String'];
  currency: Scalars['String'];
  status_code: Scalars['String'];
  fraund_status: Scalars['String'];
  transaction_status: Scalars['String'];
  transaction_type: Scalars['String'];
  status_message: Scalars['String'];
  transaction_time: Scalars['DateTime'];
  transaction_expired: Scalars['DateTime'];
  signature_key: Scalars['String'];
  payment_type: Scalars['String'];
  destination_pay: Scalars['String'];
  destination_name: Scalars['String'];
  destination_image: Scalars['String'];
  full_name: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  phone_number: Scalars['String'];
  gender: Scalars['String'];
  address: Scalars['String'];
};

export type ResponeRegTrans = {
  __typename?: 'ResponeRegTrans';
  tr_id?: Maybe<Scalars['String']>;
  reg_code?: Maybe<Scalars['String']>;
  va_number?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['String']>;
  expired?: Maybe<Scalars['String']>;
  errors?: Maybe<FieldError>;
};

export type ResponsePublicAuth = {
  __typename?: 'ResponsePublicAuth';
  errors?: Maybe<FieldError>;
  stateToken?: Maybe<Scalars['String']>;
};

export type RestAuthSession = {
  __typename?: 'RestAuthSession';
  user: DataUser;
  token: RestToken;
};

export type RestToken = {
  __typename?: 'RestToken';
  token_id?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type SchoolYear = {
  __typename?: 'SchoolYear';
  school_year_id: Scalars['String'];
  school_year_value: Scalars['String'];
  status_school_year: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type SourceInformation = {
  __typename?: 'SourceInformation';
  source_id: Scalars['String'];
  source_information_name: Scalars['String'];
  source_status: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type SubAccount = {
  __typename?: 'SubAccount';
  sub_account_id: Scalars['String'];
  id_account: Scalars['String'];
  sub_account_value: Scalars['String'];
  sub_account_des: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type SubmenuRespon = {
  __typename?: 'SubmenuRespon';
  id_menu: Scalars['String'];
  submenu_id: Scalars['String'];
  sub_name_menu: Scalars['String'];
  menu_name: Scalars['String'];
  url: Scalars['String'];
};

export type SumMoneyMovement = {
  __typename?: 'SumMoneyMovement';
  blance?: Maybe<Scalars['String']>;
  debit?: Maybe<Scalars['String']>;
  kredit?: Maybe<Scalars['String']>;
};

export type TPrices = {
  __typename?: 'TPrices';
  Total: Scalars['String'];
  discount?: Maybe<Scalars['String']>;
  TotAndDis: Scalars['String'];
};

export type Transactions = {
  __typename?: 'Transactions';
  transaction_id: Scalars['String'];
  id_payment: Scalars['String'];
  concerned_id: Scalars['String'];
  merchant_id: Scalars['String'];
  gross_amount: Scalars['String'];
  amount: Scalars['String'];
  va_number: Scalars['String'];
  currency: Scalars['String'];
  status_code: Scalars['String'];
  fraund_status: Scalars['String'];
  transaction_status: Scalars['String'];
  transaction_type: Scalars['String'];
  status_message: Scalars['String'];
  transaction_time: Scalars['DateTime'];
  transaction_expired: Scalars['DateTime'];
  signature_key: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type TransactionsTypeInput = {
  id_payment: Scalars['String'];
};

export type TransactionsVa = {
  __typename?: 'TransactionsVa';
  transaction_id?: Maybe<Scalars['String']>;
  concerned_id?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['String']>;
  va_number?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  merchant_id?: Maybe<Scalars['String']>;
  payment_type?: Maybe<Scalars['String']>;
  destination_pay?: Maybe<Scalars['String']>;
  destination_name?: Maybe<Scalars['String']>;
  transaction_expired?: Maybe<Scalars['String']>;
};

export type UpdtateAccountOption = {
  id: Scalars['String'];
  account: Scalars['String'];
  desc: Scalars['String'];
};

export type UserInputLogin = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type UserInputNewUser = {
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
  role_id: Scalars['String'];
};

export type UserRoles = {
  __typename?: 'UserRoles';
  role_id: Scalars['String'];
  role: Scalars['String'];
  role_status: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Users = {
  __typename?: 'Users';
  user_id: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  photo: Scalars['String'];
  user_status: Scalars['String'];
  role_id: Scalars['String'];
  id_lecturer: Scalars['String'];
  id_student: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type UsersRespone = {
  __typename?: 'UsersRespone';
  errors?: Maybe<FieldErrorRes>;
  user?: Maybe<DataUser>;
  token?: Maybe<RestToken>;
};

export type WaveRegistration = {
  __typename?: 'WaveRegistration';
  wave_registration_id: Scalars['String'];
  wave: Scalars['String'];
  wave_desc: Scalars['String'];
  wave_status: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Menu = {
  __typename?: 'menu';
  menu_id: Scalars['String'];
  id_path: Scalars['String'];
  role_id: Scalars['String'];
  menu_name: Scalars['String'];
  menu_icon: Scalars['String'];
  menu_status: Scalars['String'];
  menu_type: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type MenuListRespon = {
  __typename?: 'menuListRespon';
  menu_id: Scalars['String'];
  role: Scalars['String'];
  menu_name: Scalars['String'];
  menu_icon?: Maybe<Scalars['String']>;
  menu_type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  menu_status: Scalars['String'];
};

export type MenuRespon = {
  __typename?: 'menuRespon';
  menu_id: Scalars['String'];
  menu_name: Scalars['String'];
  menu_icon: Scalars['String'];
  menu_type: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type Pathurl = {
  __typename?: 'pathurl';
  path_url_id: Scalars['String'];
  url: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Presenter = {
  __typename?: 'presenter';
  presenter_id: Scalars['String'];
  presenter_name: Scalars['String'];
  presenter_photo: Scalars['String'];
  status_presenter: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Submenu = {
  __typename?: 'submenu';
  submenu_id: Scalars['String'];
  id_menu: Scalars['String'];
  id_path: Scalars['String'];
  sub_name_menu: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type UsersRes = {
  __typename?: 'usersRes';
  user_id: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  user_photo?: Maybe<Scalars['String']>;
  user_status: Scalars['String'];
  role_id?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

export type AuthLoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthLoginMutation = { __typename?: 'Mutation', login?: Maybe<{ __typename?: 'UsersRespone', errors?: Maybe<{ __typename?: 'FieldErrorRes', message: string }>, user?: Maybe<{ __typename?: 'DataUser', user_id: string, username: string, email: string, name: string, user_photo?: Maybe<string>, user_status: string, role?: Maybe<string> }>, token?: Maybe<{ __typename?: 'RestToken', token_id?: Maybe<string>, accessToken?: Maybe<string>, refreshToken?: Maybe<string> }> }> };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type AuthQueryDataQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthQueryDataQuery = { __typename?: 'Query', userdataAuth?: Maybe<{ __typename?: 'RestAuthSession', user: { __typename?: 'DataUser', user_id: string, username: string, email: string, name: string, user_photo?: Maybe<string>, user_status: string, role?: Maybe<string> }, token: { __typename?: 'RestToken', token_id?: Maybe<string>, accessToken?: Maybe<string>, refreshToken?: Maybe<string> } }> };

export type MenuAppStateUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type MenuAppStateUsersQuery = { __typename?: 'Query', menus: Array<{ __typename?: 'menuRespon', menu_id: string, menu_name: string, menu_icon: string, url?: Maybe<string>, menu_type: string }> };

export type SubmenuQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SubmenuQuery = { __typename?: 'Query', submenu: Array<{ __typename?: 'SubmenuRespon', submenu_id: string, id_menu: string, sub_name_menu: string, url: string }> };

export type DrakAndDropMutationVariables = Exact<{
  id: Scalars['String'];
  further_process: Scalars['String'];
}>;


export type DrakAndDropMutation = { __typename?: 'Mutation', ProspectiveStudentsProsessDrakAndDrop: boolean };

export type MarkProspectiveStudentMutationVariables = Exact<{
  id: Scalars['String'];
  mark: Scalars['String'];
}>;


export type MarkProspectiveStudentMutation = { __typename?: 'Mutation', markprospectivestudents: boolean };

export type NoteProspectiveStudentsMutationVariables = Exact<{
  id: Scalars['String'];
  note: Scalars['String'];
}>;


export type NoteProspectiveStudentsMutation = { __typename?: 'Mutation', noteprospectivestudents: boolean };

export type RoleCgangeStatusMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RoleCgangeStatusMutation = { __typename?: 'Mutation', RoleCgangeStatus?: Maybe<{ __typename?: 'UserRoles', role_id: string, role_status: string, role: string }> };

export type SubmenuSubmitMutationVariables = Exact<{
  role_id: Scalars['String'];
  sub_name_menu: Scalars['String'];
  menu_name: Scalars['String'];
  url: Scalars['String'];
}>;


export type SubmenuSubmitMutation = { __typename?: 'Mutation', submenusubmit: { __typename?: 'submenu', submenu_id: string, id_menu: string, id_path: string, sub_name_menu: string, createdAt: any, updatedAt: any } };

export type MenuSubmitMutationVariables = Exact<{
  id_path: Scalars['String'];
  role_id: Scalars['String'];
  menu_name: Scalars['String'];
  menu_icon: Scalars['String'];
  menu_type: Scalars['String'];
  menu_status: Scalars['String'];
}>;


export type MenuSubmitMutation = { __typename?: 'Mutation', menusubmit: { __typename?: 'menu', menu_id: string, id_path: string, role_id: string, menu_name: string, menu_icon: string, menu_status: string, menu_type: string } };

export type NewDataUserMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
  role_id: Scalars['String'];
}>;


export type NewDataUserMutation = { __typename?: 'Mutation', newuser: { __typename?: 'Users', user_id: string, username: string, email: string, role_id: string } };

export type MarkMoneyMovementMutationVariables = Exact<{
  id: Scalars['String'];
  mark: Scalars['String'];
}>;


export type MarkMoneyMovementMutation = { __typename?: 'Mutation', markmoneymovement?: Maybe<{ __typename?: 'MoneyMovement', money_movement_id: string, mark: string }> };

export type PostedkMoneyMovementMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type PostedkMoneyMovementMutation = { __typename?: 'Mutation', postedmoneymovement?: Maybe<{ __typename?: 'MoneyMovement', money_movement_id: string, posted: string }> };

export type ChangeReturnAmountMoneyMutationVariables = Exact<{
  id: Scalars['String'];
  mark: Scalars['String'];
}>;


export type ChangeReturnAmountMoneyMutation = { __typename?: 'Mutation', changereturnamountmoney?: Maybe<{ __typename?: 'MoneyMovement', money_movement_id: string }> };

export type SubmitAccountMutationVariables = Exact<{
  account: Scalars['String'];
  desc: Scalars['String'];
}>;


export type SubmitAccountMutation = { __typename?: 'Mutation', submitaccount: { __typename?: 'Account', account_id: string, account_value: string, createdAt: any, updatedAt: any } };

export type SubmitUpdateAccountMutationVariables = Exact<{
  id: Scalars['String'];
  account: Scalars['String'];
  desc: Scalars['String'];
}>;


export type SubmitUpdateAccountMutation = { __typename?: 'Mutation', submitupdateaccount: { __typename?: 'Account', account_id: string, account_value: string, createdAt: any, updatedAt: any } };

export type RemoveAccountMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveAccountMutation = { __typename?: 'Mutation', removeaccountone: boolean };

export type UsersDataQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersDataQuery = { __typename?: 'Query', users: Array<{ __typename?: 'usersRes', user_id: string, username: string, email: string, user_photo?: Maybe<string>, user_status: string, role_id?: Maybe<string>, role?: Maybe<string> }> };

export type ListProvincesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListProvincesQuery = { __typename?: 'Query', Provinces: Array<{ __typename?: 'Province', province_id: string, province_name: string }> };

export type ProspectiveStudentsProsessWaitingQueryVariables = Exact<{ [key: string]: never; }>;


export type ProspectiveStudentsProsessWaitingQuery = { __typename?: 'Query', ProspectiveStudentsProsessWaiting: Array<{ __typename?: 'ProspectiveStudents', prospective_students_id: string, reg_code: string, full_name: string, phone_number: string, school_origin: string }> };

export type ProspectiveStudentsProsessWriteQueryVariables = Exact<{ [key: string]: never; }>;


export type ProspectiveStudentsProsessWriteQuery = { __typename?: 'Query', ProspectiveStudentsProsessWrite: Array<{ __typename?: 'ProspectiveStudents', prospective_students_id: string, reg_code: string, full_name: string, phone_number: string, school_origin: string }> };

export type ProspectiveStudentsProsessInterviewQueryVariables = Exact<{ [key: string]: never; }>;


export type ProspectiveStudentsProsessInterviewQuery = { __typename?: 'Query', ProspectiveStudentsProsessInterview: Array<{ __typename?: 'ProspectiveStudents', prospective_students_id: string, reg_code: string, full_name: string, phone_number: string, school_origin: string }> };

export type ProspectiveStudentsProsessUniformQueryVariables = Exact<{ [key: string]: never; }>;


export type ProspectiveStudentsProsessUniformQuery = { __typename?: 'Query', ProspectiveStudentsProsessUniform: Array<{ __typename?: 'ProspectiveStudents', prospective_students_id: string, reg_code: string, full_name: string, phone_number: string, school_origin: string }> };

export type ProspectiveStudentsProsessDoneQueryVariables = Exact<{ [key: string]: never; }>;


export type ProspectiveStudentsProsessDoneQuery = { __typename?: 'Query', ProspectiveStudentsProsessDone: Array<{ __typename?: 'ProspectiveStudents', prospective_students_id: string, reg_code: string, full_name: string, phone_number: string, school_origin: string }> };

export type RolesDataQueryVariables = Exact<{ [key: string]: never; }>;


export type RolesDataQuery = { __typename?: 'Query', roles: Array<{ __typename?: 'UserRoles', role_id: string, role: string, role_status: string, createdAt: any, updatedAt: any }> };

export type PathsQueryVariables = Exact<{ [key: string]: never; }>;


export type PathsQuery = { __typename?: 'Query', paths: Array<{ __typename?: 'pathurl', path_url_id: string, url: string }> };

export type MenulistQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type MenulistQuery = { __typename?: 'Query', menulist: Array<{ __typename?: 'menuListRespon', menu_id: string, role: string, menu_name: string, menu_icon?: Maybe<string>, menu_type?: Maybe<string>, url?: Maybe<string>, menu_status: string }> };

export type SubmenulistQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SubmenulistQuery = { __typename?: 'Query', submenulist: Array<{ __typename?: 'SubmenuRespon', submenu_id: string, id_menu: string, sub_name_menu: string, menu_name: string, url: string }> };

export type DataprospectivestudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type DataprospectivestudentsQuery = { __typename?: 'Query', prospectivestudents: Array<{ __typename?: 'ProspectiveStudentsRespon', prospective_students_id: string, reg_code?: Maybe<string>, full_name: string, place_of_birth: string, date_of_birth: any, email?: Maybe<string>, gender: string, phone_number: string, school_origin: string, address: string, postal_code_number?: Maybe<string>, parents_name: string, house_phone_number: string, graduation_year: string, date_come: any, total_investment?: Maybe<string>, registration_status: string, date_registration?: Maybe<any>, dp_status: string, date_dp?: Maybe<any>, amount_dp: string, school_year_value: string, profession: string, education: string, province_name: string, district_or_city_name: string, religion_name: string, source_information_name: string, wave: string, wave_desc: string, class_campus_name: string, major_code: string, major: string, presenter_name?: Maybe<string>, further_process: string, date_finis_further_process?: Maybe<string>, note?: Maybe<string>, mark: string }> };

export type DataprospectivestudentsOneQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type DataprospectivestudentsOneQuery = { __typename?: 'Query', prospectivestudentsone?: Maybe<{ __typename?: 'ProspectiveStudentsRespon', prospective_students_id: string, reg_code?: Maybe<string>, full_name: string, place_of_birth: string, date_of_birth: any, email?: Maybe<string>, gender: string, phone_number: string, school_origin: string, address: string, postal_code_number?: Maybe<string>, parents_name: string, house_phone_number: string, graduation_year: string, date_come: any, total_investment?: Maybe<string>, registration_status: string, date_registration?: Maybe<any>, dp_status: string, date_dp?: Maybe<any>, amount_dp: string, school_year_value: string, profession: string, education: string, province_name: string, district_or_city_name: string, religion_name: string, source_information_name: string, wave: string, wave_desc: string, class_campus_name: string, major_code: string, major: string, presenter_name?: Maybe<string>, further_process: string, date_finis_further_process?: Maybe<string>, note?: Maybe<string>, mark: string }> };

export type GetTransactionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTransactionsQuery = { __typename?: 'Query', gettransaction: Array<{ __typename?: 'Transactions', transaction_id: string, id_payment: string, concerned_id: string, merchant_id: string, gross_amount: string, amount: string, va_number: string, currency: string, status_code: string, fraund_status: string, transaction_status: string, transaction_type: string, status_message: string, transaction_time: any, transaction_expired: any, signature_key: string, createdAt: any, updatedAt: any }> };

export type GetHistoryTransactionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetHistoryTransactionQuery = { __typename?: 'Query', gethistorytransaction: Array<{ __typename?: 'Transactions', transaction_id: string, id_payment: string, concerned_id: string, merchant_id: string, gross_amount: string, amount: string, va_number: string, currency: string, status_code: string, fraund_status: string, transaction_status: string, transaction_type: string, status_message: string, transaction_time: any, transaction_expired: any, signature_key: string, createdAt: any, updatedAt: any }> };

export type TransactionOneQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type TransactionOneQuery = { __typename?: 'Query', trasactionone?: Maybe<{ __typename?: 'ResTrasOne', transaction_id: string, id_payment: string, concerned_id: string, merchant_id: string, gross_amount: string, amount: string, va_number: string, currency: string, status_code: string, fraund_status: string, transaction_status: string, transaction_type: string, status_message: string, transaction_time: any, transaction_expired: any, signature_key: string, destination_pay: string, payment_type: string, destination_name: string, destination_image: string, full_name: string, email?: Maybe<string>, phone_number: string, gender: string, address: string }> };

export type GetAccountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAccountQuery = { __typename?: 'Query', getaccount: Array<{ __typename?: 'Account', account_id: string, account_value: string, account_des: string }> };

export type GetAccountOneQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetAccountOneQuery = { __typename?: 'Query', getaccountone: { __typename?: 'Account', account_id: string, account_value: string, account_des: string } };

export type GetSubAccountQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetSubAccountQuery = { __typename?: 'Query', subaccountwhereaccount: Array<{ __typename?: 'SubAccount', sub_account_id: string, id_account: string, sub_account_value: string, sub_account_des: string }> };

export type GetAllSubAccountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSubAccountQuery = { __typename?: 'Query', subaccountaccountall: Array<{ __typename?: 'ResSubAccount', sub_account_id: string, id_account: string, sub_account_value: string, sub_account_des: string, account_value?: Maybe<string> }> };

export type GetGroupAccountQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetGroupAccountQuery = { __typename?: 'Query', groupaccountwhereaccount: Array<{ __typename?: 'GroupAccount', group_account_id: string, id_sub_account: string, group_account_value: string, group_account_des: string }> };

export type MoneyMovementSumQueryVariables = Exact<{
  id: Scalars['String'];
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
}>;


export type MoneyMovementSumQuery = { __typename?: 'Query', moneymovementsum?: Maybe<{ __typename?: 'SumMoneyMovement', blance?: Maybe<string>, debit?: Maybe<string>, kredit?: Maybe<string> }> };

export type TotalMoneyMovementSumQueryVariables = Exact<{
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
}>;


export type TotalMoneyMovementSumQuery = { __typename?: 'Query', totalmoneymovementsum?: Maybe<{ __typename?: 'SumMoneyMovement', blance?: Maybe<string>, debit?: Maybe<string>, kredit?: Maybe<string> }> };

export type LedgerQueryVariables = Exact<{
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
}>;


export type LedgerQuery = { __typename?: 'Query', ledger: Array<{ __typename?: 'ResLedger', money_movement_id: string, connected?: Maybe<string>, posted: boolean, account: string, ref?: Maybe<string>, proof: string, amount: number, return_amount: number, money_movement_des: string, money_movement_type: string, group_account_value: string, group_account_des: string, mark: string, created_at: any, updated_at: any }> };

export type MoneyMovementQueryVariables = Exact<{
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
}>;


export type MoneyMovementQuery = { __typename?: 'Query', moneymovement: Array<{ __typename?: 'ResLedger', money_movement_id: string, connected?: Maybe<string>, posted: boolean, account: string, ref?: Maybe<string>, proof: string, amount: number, return_amount: number, money_movement_des: string, money_movement_type: string, group_account_value: string, group_account_des: string, mark: string, created_at: any, updated_at: any }> };

export type MoneyMovementHistoryQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type MoneyMovementHistoryQuery = { __typename?: 'Query', moneymovementhistory: Array<{ __typename?: 'ResLedger', money_movement_id: string, connected?: Maybe<string>, posted: boolean, account: string, ref?: Maybe<string>, proof: string, amount: number, return_amount: number, money_movement_des: string, money_movement_type: string, group_account_value: string, group_account_des: string, mark: string, created_at: any, updated_at: any }> };

export type MoneyMovementOneQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type MoneyMovementOneQuery = { __typename?: 'Query', moneymovementone?: Maybe<{ __typename?: 'ResMoneyMovementOneFinance', money_movement?: Maybe<{ __typename?: 'ResLedger', money_movement_id: string, connected?: Maybe<string>, posted: boolean, account: string, ref?: Maybe<string>, proof: string, amount: number, return_amount: number, money_movement_des: string, money_movement_type: string, group_account_value: string, group_account_des: string, mark: string, created_at: any, updated_at: any }>, connected_value?: Maybe<{ __typename?: 'ConnectedResMoneyMovementOne', full_name: string, email?: Maybe<string>, phone_number: string, gender: string, address: string, place_of_birth: string, date_of_birth: any, school_year_value: string, profession: string, province_name: string, district_or_city_name: string, religion_name: string, class_campus_name: string, major_code: string, major: string, class_name?: Maybe<string>, total_investment: number }> }> };


export const AuthLoginDocument = gql`
    mutation AuthLogin($username: String!, $password: String!) {
  login(options: {username: $username, password: $password}) {
    errors {
      message
    }
    user {
      user_id
      username
      email
      name
      user_photo
      user_status
      role
    }
    token {
      token_id
      accessToken
      refreshToken
    }
  }
}
    `;

export function useAuthLoginMutation() {
  return Urql.useMutation<AuthLoginMutation, AuthLoginMutationVariables>(AuthLoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const AuthQueryDataDocument = gql`
    query AuthQueryData {
  userdataAuth {
    user {
      user_id
      username
      email
      name
      user_photo
      user_status
      role
    }
    token {
      token_id
      accessToken
      refreshToken
    }
  }
}
    `;

export function useAuthQueryDataQuery(options: Omit<Urql.UseQueryArgs<AuthQueryDataQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AuthQueryDataQuery>({ query: AuthQueryDataDocument, ...options });
};
export const MenuAppStateUsersDocument = gql`
    query MenuAppStateUsers {
  menus {
    menu_id
    menu_name
    menu_icon
    url
    menu_type
  }
}
    `;

export function useMenuAppStateUsersQuery(options: Omit<Urql.UseQueryArgs<MenuAppStateUsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MenuAppStateUsersQuery>({ query: MenuAppStateUsersDocument, ...options });
};
export const SubmenuDocument = gql`
    query Submenu($id: String!) {
  submenu(options: {id: $id}) {
    submenu_id
    id_menu
    sub_name_menu
    url
  }
}
    `;

export function useSubmenuQuery(options: Omit<Urql.UseQueryArgs<SubmenuQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SubmenuQuery>({ query: SubmenuDocument, ...options });
};
export const DrakAndDropDocument = gql`
    mutation DrakAndDrop($id: String!, $further_process: String!) {
  ProspectiveStudentsProsessDrakAndDrop(
    options: {id: $id, further_process: $further_process}
  )
}
    `;

export function useDrakAndDropMutation() {
  return Urql.useMutation<DrakAndDropMutation, DrakAndDropMutationVariables>(DrakAndDropDocument);
};
export const MarkProspectiveStudentDocument = gql`
    mutation MarkProspectiveStudent($id: String!, $mark: String!) {
  markprospectivestudents(options: {id: $id, mark: $mark})
}
    `;

export function useMarkProspectiveStudentMutation() {
  return Urql.useMutation<MarkProspectiveStudentMutation, MarkProspectiveStudentMutationVariables>(MarkProspectiveStudentDocument);
};
export const NoteProspectiveStudentsDocument = gql`
    mutation NoteProspectiveStudents($id: String!, $note: String!) {
  noteprospectivestudents(options: {id: $id, note: $note})
}
    `;

export function useNoteProspectiveStudentsMutation() {
  return Urql.useMutation<NoteProspectiveStudentsMutation, NoteProspectiveStudentsMutationVariables>(NoteProspectiveStudentsDocument);
};
export const RoleCgangeStatusDocument = gql`
    mutation RoleCgangeStatus($id: String!) {
  RoleCgangeStatus(options: {id: $id}) {
    role_id
    role_status
    role
  }
}
    `;

export function useRoleCgangeStatusMutation() {
  return Urql.useMutation<RoleCgangeStatusMutation, RoleCgangeStatusMutationVariables>(RoleCgangeStatusDocument);
};
export const SubmenuSubmitDocument = gql`
    mutation submenuSubmit($role_id: String!, $sub_name_menu: String!, $menu_name: String!, $url: String!) {
  submenusubmit(
    options: {role_id: $role_id, sub_name_menu: $sub_name_menu, menu_name: $menu_name, url: $url}
  ) {
    submenu_id
    id_menu
    id_path
    sub_name_menu
    createdAt
    updatedAt
  }
}
    `;

export function useSubmenuSubmitMutation() {
  return Urql.useMutation<SubmenuSubmitMutation, SubmenuSubmitMutationVariables>(SubmenuSubmitDocument);
};
export const MenuSubmitDocument = gql`
    mutation menuSubmit($id_path: String!, $role_id: String!, $menu_name: String!, $menu_icon: String!, $menu_type: String!, $menu_status: String!) {
  menusubmit(
    options: {id_path: $id_path, role_id: $role_id, menu_name: $menu_name, menu_icon: $menu_icon, menu_type: $menu_type, menu_status: $menu_status}
  ) {
    menu_id
    id_path
    role_id
    menu_name
    menu_icon
    menu_status
    menu_type
  }
}
    `;

export function useMenuSubmitMutation() {
  return Urql.useMutation<MenuSubmitMutation, MenuSubmitMutationVariables>(MenuSubmitDocument);
};
export const NewDataUserDocument = gql`
    mutation NewDataUser($username: String!, $password: String!, $email: String!, $role_id: String!) {
  newuser(
    options: {username: $username, password: $password, email: $email, role_id: $role_id}
  ) {
    user_id
    username
    email
    role_id
  }
}
    `;

export function useNewDataUserMutation() {
  return Urql.useMutation<NewDataUserMutation, NewDataUserMutationVariables>(NewDataUserDocument);
};
export const MarkMoneyMovementDocument = gql`
    mutation MarkMoneyMovement($id: String!, $mark: String!) {
  markmoneymovement(options: {id: $id, mark: $mark}) {
    money_movement_id
    mark
  }
}
    `;

export function useMarkMoneyMovementMutation() {
  return Urql.useMutation<MarkMoneyMovementMutation, MarkMoneyMovementMutationVariables>(MarkMoneyMovementDocument);
};
export const PostedkMoneyMovementDocument = gql`
    mutation PostedkMoneyMovement($id: String!) {
  postedmoneymovement(options: {id: $id}) {
    money_movement_id
    posted
  }
}
    `;

export function usePostedkMoneyMovementMutation() {
  return Urql.useMutation<PostedkMoneyMovementMutation, PostedkMoneyMovementMutationVariables>(PostedkMoneyMovementDocument);
};
export const ChangeReturnAmountMoneyDocument = gql`
    mutation ChangeReturnAmountMoney($id: String!, $mark: String!) {
  changereturnamountmoney(options: {id: $id, mark: $mark}) {
    money_movement_id
  }
}
    `;

export function useChangeReturnAmountMoneyMutation() {
  return Urql.useMutation<ChangeReturnAmountMoneyMutation, ChangeReturnAmountMoneyMutationVariables>(ChangeReturnAmountMoneyDocument);
};
export const SubmitAccountDocument = gql`
    mutation SubmitAccount($account: String!, $desc: String!) {
  submitaccount(options: {account: $account, desc: $desc}) {
    account_id
    account_value
    createdAt
    updatedAt
  }
}
    `;

export function useSubmitAccountMutation() {
  return Urql.useMutation<SubmitAccountMutation, SubmitAccountMutationVariables>(SubmitAccountDocument);
};
export const SubmitUpdateAccountDocument = gql`
    mutation SubmitUpdateAccount($id: String!, $account: String!, $desc: String!) {
  submitupdateaccount(options: {id: $id, account: $account, desc: $desc}) {
    account_id
    account_value
    createdAt
    updatedAt
  }
}
    `;

export function useSubmitUpdateAccountMutation() {
  return Urql.useMutation<SubmitUpdateAccountMutation, SubmitUpdateAccountMutationVariables>(SubmitUpdateAccountDocument);
};
export const RemoveAccountDocument = gql`
    mutation RemoveAccount($id: String!) {
  removeaccountone(options: {id: $id})
}
    `;

export function useRemoveAccountMutation() {
  return Urql.useMutation<RemoveAccountMutation, RemoveAccountMutationVariables>(RemoveAccountDocument);
};
export const UsersDataDocument = gql`
    query UsersData {
  users {
    user_id
    username
    email
    user_photo
    user_status
    role_id
    role
  }
}
    `;

export function useUsersDataQuery(options: Omit<Urql.UseQueryArgs<UsersDataQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UsersDataQuery>({ query: UsersDataDocument, ...options });
};
export const ListProvincesDocument = gql`
    query ListProvinces {
  Provinces {
    province_id
    province_name
  }
}
    `;

export function useListProvincesQuery(options: Omit<Urql.UseQueryArgs<ListProvincesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ListProvincesQuery>({ query: ListProvincesDocument, ...options });
};
export const ProspectiveStudentsProsessWaitingDocument = gql`
    query ProspectiveStudentsProsessWaiting {
  ProspectiveStudentsProsessWaiting {
    prospective_students_id
    reg_code
    full_name
    phone_number
    school_origin
  }
}
    `;

export function useProspectiveStudentsProsessWaitingQuery(options: Omit<Urql.UseQueryArgs<ProspectiveStudentsProsessWaitingQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ProspectiveStudentsProsessWaitingQuery>({ query: ProspectiveStudentsProsessWaitingDocument, ...options });
};
export const ProspectiveStudentsProsessWriteDocument = gql`
    query ProspectiveStudentsProsessWrite {
  ProspectiveStudentsProsessWrite {
    prospective_students_id
    reg_code
    full_name
    phone_number
    school_origin
  }
}
    `;

export function useProspectiveStudentsProsessWriteQuery(options: Omit<Urql.UseQueryArgs<ProspectiveStudentsProsessWriteQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ProspectiveStudentsProsessWriteQuery>({ query: ProspectiveStudentsProsessWriteDocument, ...options });
};
export const ProspectiveStudentsProsessInterviewDocument = gql`
    query ProspectiveStudentsProsessInterview {
  ProspectiveStudentsProsessInterview {
    prospective_students_id
    reg_code
    full_name
    phone_number
    school_origin
  }
}
    `;

export function useProspectiveStudentsProsessInterviewQuery(options: Omit<Urql.UseQueryArgs<ProspectiveStudentsProsessInterviewQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ProspectiveStudentsProsessInterviewQuery>({ query: ProspectiveStudentsProsessInterviewDocument, ...options });
};
export const ProspectiveStudentsProsessUniformDocument = gql`
    query ProspectiveStudentsProsessUniform {
  ProspectiveStudentsProsessUniform {
    prospective_students_id
    reg_code
    full_name
    phone_number
    school_origin
  }
}
    `;

export function useProspectiveStudentsProsessUniformQuery(options: Omit<Urql.UseQueryArgs<ProspectiveStudentsProsessUniformQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ProspectiveStudentsProsessUniformQuery>({ query: ProspectiveStudentsProsessUniformDocument, ...options });
};
export const ProspectiveStudentsProsessDoneDocument = gql`
    query ProspectiveStudentsProsessDone {
  ProspectiveStudentsProsessDone {
    prospective_students_id
    reg_code
    full_name
    phone_number
    school_origin
  }
}
    `;

export function useProspectiveStudentsProsessDoneQuery(options: Omit<Urql.UseQueryArgs<ProspectiveStudentsProsessDoneQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ProspectiveStudentsProsessDoneQuery>({ query: ProspectiveStudentsProsessDoneDocument, ...options });
};
export const RolesDataDocument = gql`
    query RolesData {
  roles {
    role_id
    role
    role_status
    createdAt
    updatedAt
  }
}
    `;

export function useRolesDataQuery(options: Omit<Urql.UseQueryArgs<RolesDataQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<RolesDataQuery>({ query: RolesDataDocument, ...options });
};
export const PathsDocument = gql`
    query paths {
  paths {
    path_url_id
    url
  }
}
    `;

export function usePathsQuery(options: Omit<Urql.UseQueryArgs<PathsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PathsQuery>({ query: PathsDocument, ...options });
};
export const MenulistDocument = gql`
    query menulist($id: String!) {
  menulist(options: {id: $id}) {
    menu_id
    role
    menu_name
    menu_icon
    menu_type
    url
    menu_status
  }
}
    `;

export function useMenulistQuery(options: Omit<Urql.UseQueryArgs<MenulistQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MenulistQuery>({ query: MenulistDocument, ...options });
};
export const SubmenulistDocument = gql`
    query submenulist($id: String!) {
  submenulist(options: {id: $id}) {
    submenu_id
    id_menu
    sub_name_menu
    menu_name
    url
  }
}
    `;

export function useSubmenulistQuery(options: Omit<Urql.UseQueryArgs<SubmenulistQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SubmenulistQuery>({ query: SubmenulistDocument, ...options });
};
export const DataprospectivestudentsDocument = gql`
    query Dataprospectivestudents {
  prospectivestudents {
    prospective_students_id
    reg_code
    full_name
    place_of_birth
    date_of_birth
    email
    gender
    phone_number
    school_origin
    address
    postal_code_number
    parents_name
    house_phone_number
    graduation_year
    date_come
    total_investment
    registration_status
    date_registration
    dp_status
    date_dp
    amount_dp
    school_year_value
    profession
    education
    province_name
    district_or_city_name
    religion_name
    source_information_name
    wave
    wave_desc
    class_campus_name
    major_code
    major
    presenter_name
    further_process
    date_finis_further_process
    note
    mark
  }
}
    `;

export function useDataprospectivestudentsQuery(options: Omit<Urql.UseQueryArgs<DataprospectivestudentsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<DataprospectivestudentsQuery>({ query: DataprospectivestudentsDocument, ...options });
};
export const DataprospectivestudentsOneDocument = gql`
    query DataprospectivestudentsOne($id: String!) {
  prospectivestudentsone(options: {id: $id}) {
    prospective_students_id
    reg_code
    full_name
    place_of_birth
    date_of_birth
    email
    gender
    phone_number
    school_origin
    address
    postal_code_number
    parents_name
    house_phone_number
    graduation_year
    date_come
    total_investment
    registration_status
    date_registration
    dp_status
    date_dp
    amount_dp
    school_year_value
    profession
    education
    province_name
    district_or_city_name
    religion_name
    source_information_name
    wave
    wave_desc
    class_campus_name
    major_code
    major
    presenter_name
    further_process
    date_finis_further_process
    note
    mark
  }
}
    `;

export function useDataprospectivestudentsOneQuery(options: Omit<Urql.UseQueryArgs<DataprospectivestudentsOneQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<DataprospectivestudentsOneQuery>({ query: DataprospectivestudentsOneDocument, ...options });
};
export const GetTransactionsDocument = gql`
    query GetTransactions {
  gettransaction {
    transaction_id
    id_payment
    concerned_id
    merchant_id
    gross_amount
    amount
    va_number
    currency
    status_code
    fraund_status
    transaction_status
    transaction_type
    status_message
    transaction_time
    transaction_expired
    signature_key
    createdAt
    updatedAt
  }
}
    `;

export function useGetTransactionsQuery(options: Omit<Urql.UseQueryArgs<GetTransactionsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetTransactionsQuery>({ query: GetTransactionsDocument, ...options });
};
export const GetHistoryTransactionDocument = gql`
    query GetHistoryTransaction($id: String!) {
  gethistorytransaction(options: {id: $id}) {
    transaction_id
    id_payment
    concerned_id
    merchant_id
    gross_amount
    amount
    va_number
    currency
    status_code
    fraund_status
    transaction_status
    transaction_type
    status_message
    transaction_time
    transaction_expired
    signature_key
    createdAt
    updatedAt
  }
}
    `;

export function useGetHistoryTransactionQuery(options: Omit<Urql.UseQueryArgs<GetHistoryTransactionQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetHistoryTransactionQuery>({ query: GetHistoryTransactionDocument, ...options });
};
export const TransactionOneDocument = gql`
    query TransactionOne($id: String!) {
  trasactionone(options: {id: $id}) {
    transaction_id
    id_payment
    concerned_id
    merchant_id
    gross_amount
    amount
    va_number
    currency
    status_code
    fraund_status
    transaction_status
    transaction_type
    status_message
    transaction_time
    transaction_expired
    signature_key
    destination_pay
    payment_type
    destination_name
    destination_image
    full_name
    email
    transaction_status
    phone_number
    gender
    address
  }
}
    `;

export function useTransactionOneQuery(options: Omit<Urql.UseQueryArgs<TransactionOneQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<TransactionOneQuery>({ query: TransactionOneDocument, ...options });
};
export const GetAccountDocument = gql`
    query GetAccount {
  getaccount {
    account_id
    account_value
    account_des
  }
}
    `;

export function useGetAccountQuery(options: Omit<Urql.UseQueryArgs<GetAccountQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAccountQuery>({ query: GetAccountDocument, ...options });
};
export const GetAccountOneDocument = gql`
    query GetAccountOne($id: String!) {
  getaccountone(options: {id: $id}) {
    account_id
    account_value
    account_des
  }
}
    `;

export function useGetAccountOneQuery(options: Omit<Urql.UseQueryArgs<GetAccountOneQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAccountOneQuery>({ query: GetAccountOneDocument, ...options });
};
export const GetSubAccountDocument = gql`
    query GetSubAccount($id: String!) {
  subaccountwhereaccount(options: {id: $id}) {
    sub_account_id
    id_account
    sub_account_value
    sub_account_des
  }
}
    `;

export function useGetSubAccountQuery(options: Omit<Urql.UseQueryArgs<GetSubAccountQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetSubAccountQuery>({ query: GetSubAccountDocument, ...options });
};
export const GetAllSubAccountDocument = gql`
    query GetAllSubAccount {
  subaccountaccountall {
    sub_account_id
    id_account
    sub_account_value
    sub_account_des
    account_value
  }
}
    `;

export function useGetAllSubAccountQuery(options: Omit<Urql.UseQueryArgs<GetAllSubAccountQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllSubAccountQuery>({ query: GetAllSubAccountDocument, ...options });
};
export const GetGroupAccountDocument = gql`
    query GetGroupAccount($id: String!) {
  groupaccountwhereaccount(options: {id: $id}) {
    group_account_id
    id_sub_account
    group_account_value
    group_account_des
  }
}
    `;

export function useGetGroupAccountQuery(options: Omit<Urql.UseQueryArgs<GetGroupAccountQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetGroupAccountQuery>({ query: GetGroupAccountDocument, ...options });
};
export const MoneyMovementSumDocument = gql`
    query MoneyMovementSum($id: String!, $from: String, $to: String) {
  moneymovementsum(options: {id: $id, from: $from, to: $to}) {
    blance
    debit
    kredit
  }
}
    `;

export function useMoneyMovementSumQuery(options: Omit<Urql.UseQueryArgs<MoneyMovementSumQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MoneyMovementSumQuery>({ query: MoneyMovementSumDocument, ...options });
};
export const TotalMoneyMovementSumDocument = gql`
    query TotalMoneyMovementSum($from: String, $to: String) {
  totalmoneymovementsum(options: {from: $from, to: $to}) {
    blance
    debit
    kredit
  }
}
    `;

export function useTotalMoneyMovementSumQuery(options: Omit<Urql.UseQueryArgs<TotalMoneyMovementSumQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<TotalMoneyMovementSumQuery>({ query: TotalMoneyMovementSumDocument, ...options });
};
export const LedgerDocument = gql`
    query Ledger($from: String, $to: String) {
  ledger(options: {from: $from, to: $to}) {
    money_movement_id
    connected
    posted
    account
    ref
    proof
    amount
    return_amount
    money_movement_des
    money_movement_type
    group_account_value
    group_account_des
    mark
    created_at
    updated_at
  }
}
    `;

export function useLedgerQuery(options: Omit<Urql.UseQueryArgs<LedgerQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<LedgerQuery>({ query: LedgerDocument, ...options });
};
export const MoneyMovementDocument = gql`
    query MoneyMovement($from: String, $to: String) {
  moneymovement(options: {from: $from, to: $to}) {
    money_movement_id
    connected
    posted
    account
    ref
    proof
    amount
    return_amount
    money_movement_des
    money_movement_type
    group_account_value
    group_account_des
    mark
    created_at
    updated_at
  }
}
    `;

export function useMoneyMovementQuery(options: Omit<Urql.UseQueryArgs<MoneyMovementQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MoneyMovementQuery>({ query: MoneyMovementDocument, ...options });
};
export const MoneyMovementHistoryDocument = gql`
    query MoneyMovementHistory($id: String!) {
  moneymovementhistory(options: {id: $id}) {
    money_movement_id
    connected
    posted
    account
    ref
    proof
    amount
    return_amount
    money_movement_des
    money_movement_type
    group_account_value
    group_account_des
    mark
    created_at
    updated_at
  }
}
    `;

export function useMoneyMovementHistoryQuery(options: Omit<Urql.UseQueryArgs<MoneyMovementHistoryQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MoneyMovementHistoryQuery>({ query: MoneyMovementHistoryDocument, ...options });
};
export const MoneyMovementOneDocument = gql`
    query MoneyMovementOne($id: String!) {
  moneymovementone(options: {id: $id}) {
    money_movement {
      money_movement_id
      connected
      posted
      account
      ref
      proof
      amount
      return_amount
      money_movement_des
      money_movement_type
      group_account_value
      group_account_des
      mark
      created_at
      updated_at
    }
    connected_value {
      full_name
      email
      phone_number
      gender
      address
      place_of_birth
      date_of_birth
      school_year_value
      profession
      province_name
      district_or_city_name
      religion_name
      class_campus_name
      major_code
      major
      class_name
      total_investment
    }
  }
}
    `;

export function useMoneyMovementOneQuery(options: Omit<Urql.UseQueryArgs<MoneyMovementOneQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MoneyMovementOneQuery>({ query: MoneyMovementOneDocument, ...options });
};