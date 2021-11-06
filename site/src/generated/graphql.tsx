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

export type ClassCampus = {
  __typename?: 'ClassCampus';
  class_campus_id: Scalars['String'];
  class_campus_name: Scalars['String'];
  class_campus_status: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
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
  user_photo?: Maybe<Scalars['String']>;
  user_status: Scalars['String'];
  role?: Maybe<Scalars['String']>;
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

export type IdClassCampusTypeInput = {
  id_class_campus: Scalars['String'];
};

export type IdMajorsTypeInput = {
  id_major: Scalars['String'];
};

export type IdTransactionsTypeInput = {
  transaction_id: Scalars['String'];
};

export type IdTypeInput = {
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

export type Mutation = {
  __typename?: 'Mutation';
  ProvineCreate: Province;
  PublicAuth: ResponsePublicAuth;
  ListMajorsRegister: Array<ListMajors>;
  RegistrationSubmit: InfoNewProspectiveStudents;
  RegistrationTransactionsCreate: ResponeRegTrans;
  login: UsersRespone;
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


export type MutationLoginArgs = {
  options: UserInputLogin;
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
  DataTransaction: Array<Transactions>;
  DataTransactionOne?: Maybe<Transactions>;
  users: Array<Users>;
  userdataAuth?: Maybe<RestAuthSession>;
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


export type QueryDataTransactionOneArgs = {
  options: IdTransactionsTypeInput;
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

export type ResProv = {
  __typename?: 'ResProv';
  province_id?: Maybe<Scalars['String']>;
  province_name: Scalars['String'];
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

export type UserInputLogin = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type Users = {
  __typename?: 'Users';
  user_id: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
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
  accessToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
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

export type Presenter = {
  __typename?: 'presenter';
  presenter_id: Scalars['String'];
  presenter_name: Scalars['String'];
  presenter_photo: Scalars['String'];
  status_presenter: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ListMajorSiteQueryVariables = Exact<{ [key: string]: never; }>;


export type ListMajorSiteQuery = (
  { __typename?: 'Query' }
  & { ListMajorSite: Array<(
    { __typename?: 'ListMajors' }
    & Pick<ListMajors, 'list_major_id' | 'major' | 'major_image' | 'major_desc'>
  )> }
);

export type ListProvincesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListProvincesQuery = (
  { __typename?: 'Query' }
  & { Provinces: Array<(
    { __typename?: 'Province' }
    & Pick<Province, 'province_id' | 'province_name'>
  )> }
);

export type ListPresentersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListPresentersQuery = (
  { __typename?: 'Query' }
  & { Presenters: Array<(
    { __typename?: 'presenter' }
    & Pick<Presenter, 'presenter_name' | 'presenter_photo' | 'presenter_id'>
  )> }
);

export type ListClassOpenRegisterQueryVariables = Exact<{ [key: string]: never; }>;


export type ListClassOpenRegisterQuery = (
  { __typename?: 'Query' }
  & { ClassOpenRegister: Array<(
    { __typename?: 'ClassCampus' }
    & Pick<ClassCampus, 'class_campus_id' | 'class_campus_name'>
  )> }
);

export type WaveRegisterationQueryVariables = Exact<{ [key: string]: never; }>;


export type WaveRegisterationQuery = (
  { __typename?: 'Query' }
  & { WavetRegister: (
    { __typename?: 'WaveRegistration' }
    & Pick<WaveRegistration, 'wave_registration_id' | 'wave'>
  ) }
);

export type ReligionRegisterQueryVariables = Exact<{ [key: string]: never; }>;


export type ReligionRegisterQuery = (
  { __typename?: 'Query' }
  & { ReligionRegister: Array<(
    { __typename?: 'Religion' }
    & Pick<Religion, 'religion_id' | 'religion_name'>
  )> }
);

export type SourceInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type SourceInfoQuery = (
  { __typename?: 'Query' }
  & { SourceInfo: Array<(
    { __typename?: 'SourceInformation' }
    & Pick<SourceInformation, 'source_id' | 'source_information_name'>
  )> }
);

export type ProfessionQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfessionQuery = (
  { __typename?: 'Query' }
  & { Profession: Array<(
    { __typename?: 'Profession' }
    & Pick<Profession, 'profession_id' | 'profession'>
  )> }
);

export type WavetRegisterQueryVariables = Exact<{ [key: string]: never; }>;


export type WavetRegisterQuery = (
  { __typename?: 'Query' }
  & { WavetRegister: (
    { __typename?: 'WaveRegistration' }
    & Pick<WaveRegistration, 'wave_registration_id' | 'wave' | 'wave_desc'>
  ) }
);

export type SchoolYearRegisterQueryVariables = Exact<{ [key: string]: never; }>;


export type SchoolYearRegisterQuery = (
  { __typename?: 'Query' }
  & { SchoolYearRegister: (
    { __typename?: 'SchoolYear' }
    & Pick<SchoolYear, 'school_year_id' | 'school_year_value' | 'status_school_year'>
  ) }
);

export type EducationListRegisterQueryVariables = Exact<{ [key: string]: never; }>;


export type EducationListRegisterQuery = (
  { __typename?: 'Query' }
  & { EducationListRegister: Array<(
    { __typename?: 'EducationList' }
    & Pick<EducationList, 'education_list_id' | 'education'>
  )> }
);

export type ProspectiveInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type ProspectiveInfoQuery = (
  { __typename?: 'Query' }
  & { prospectiveInfo: (
    { __typename?: 'ProspectiveStudentsaInfoCost' }
    & Pick<ProspectiveStudentsaInfoCost, 'prospective_students_id' | 'reg_code' | 'id_class_campus' | 'class_campus' | 'wave' | 'wave_desc' | 'year'>
  ) }
);

export type PaymenttypesQueryVariables = Exact<{ [key: string]: never; }>;


export type PaymenttypesQuery = (
  { __typename?: 'Query' }
  & { paymenttypes: Array<(
    { __typename?: 'Payments' }
    & Pick<Payments, 'payment_id' | 'payment_type' | 'destination_pay' | 'destination_name' | 'destination_image'>
  )> }
);

export type TotalPricesQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type TotalPricesQuery = (
  { __typename?: 'Query' }
  & { totalPrices: (
    { __typename?: 'TPrices' }
    & Pick<TPrices, 'Total' | 'discount' | 'TotAndDis'>
  ) }
);

export type TransactionsStateQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type TransactionsStateQuery = (
  { __typename?: 'Query' }
  & { TransactionsState: (
    { __typename?: 'TransactionsVa' }
    & Pick<TransactionsVa, 'transaction_id' | 'concerned_id' | 'amount' | 'va_number' | 'currency' | 'merchant_id' | 'payment_type' | 'destination_pay' | 'destination_name' | 'transaction_expired'>
  ) }
);

export type SourceInfoOneQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SourceInfoOneQuery = (
  { __typename?: 'Query' }
  & { SourceInfoOne?: Maybe<(
    { __typename?: 'SourceInformation' }
    & Pick<SourceInformation, 'source_id' | 'source_information_name'>
  )> }
);

export type DistrictFromProvQueryVariables = Exact<{
  province_id: Scalars['String'];
}>;


export type DistrictFromProvQuery = (
  { __typename?: 'Query' }
  & { ProvinceDistrict?: Maybe<Array<(
    { __typename?: 'ResDisttrictProv' }
    & Pick<ResDisttrictProv, 'district_or_city_id' | 'district_or_city_name'>
  )>> }
);

export type MajorFromClassCampusQueryVariables = Exact<{
  id_class_campus: Scalars['String'];
}>;


export type MajorFromClassCampusQuery = (
  { __typename?: 'Query' }
  & { majorFromClassCampus: Array<(
    { __typename?: 'ListMajors' }
    & Pick<ListMajors, 'list_major_id' | 'major'>
  )> }
);

export type ListPricesRegisterQueryVariables = Exact<{
  id_major: Scalars['String'];
}>;


export type ListPricesRegisterQuery = (
  { __typename?: 'Query' }
  & { ListPricesRegister?: Maybe<Array<(
    { __typename?: 'ListPrice' }
    & Pick<ListPrice, 'list_price_id' | 'list_price_desc' | 'list_price_value'>
  )>> }
);

export type AuthStateCodeQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthStateCodeQuery = (
  { __typename?: 'Query' }
  & { StataeCode: (
    { __typename?: 'DataFromReqCode' }
    & Pick<DataFromReqCode, 'stateToken'>
    & { inforeq: (
      { __typename?: 'InfoRreCodes' }
      & Pick<InfoRreCodes, 'prospective_students_id' | 'reg_code' | 'full_name' | 'email' | 'phone_number' | 'religion' | 'district_or_city' | 'address' | 'graduation_year' | 'major' | 'school_year' | 'date_registration' | 'total_investment'>
    ), error: (
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'message'>
    ) }
  ) }
);

export type LisMajorRegisterStateMutationVariables = Exact<{
  id_class_campus: Scalars['String'];
}>;


export type LisMajorRegisterStateMutation = (
  { __typename?: 'Mutation' }
  & { ListMajorsRegister: Array<(
    { __typename?: 'ListMajors' }
    & Pick<ListMajors, 'list_major_id' | 'major' | 'major_image' | 'major_desc'>
  )> }
);

export type RegistrationTransactionsCreateMutationVariables = Exact<{
  id_payment: Scalars['String'];
}>;


export type RegistrationTransactionsCreateMutation = (
  { __typename?: 'Mutation' }
  & { RegistrationTransactionsCreate: (
    { __typename?: 'ResponeRegTrans' }
    & Pick<ResponeRegTrans, 'tr_id' | 'reg_code' | 'va_number' | 'amount' | 'expired'>
    & { errors?: Maybe<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'message'>
    )> }
  ) }
);

export type MutRegistrationSubmitMutationVariables = Exact<{
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
  id_school_year: Scalars['String'];
  graduation_year: Scalars['String'];
  parents_profession: Scalars['String'];
  id_education_list: Scalars['String'];
  id_district_or_city: Scalars['String'];
  id_religion: Scalars['String'];
  id_source_info: Scalars['String'];
  id_wave_register: Scalars['String'];
  id_major: Scalars['String'];
  id_presenter: Scalars['String'];
}>;


export type MutRegistrationSubmitMutation = (
  { __typename?: 'Mutation' }
  & { RegistrationSubmit: (
    { __typename?: 'InfoNewProspectiveStudents' }
    & Pick<InfoNewProspectiveStudents, 'reg_code' | 'concerned_id'>
  ) }
);

export type PublicAuthStateMutationVariables = Exact<{
  reg_code: Scalars['String'];
}>;


export type PublicAuthStateMutation = (
  { __typename?: 'Mutation' }
  & { PublicAuth: (
    { __typename?: 'ResponsePublicAuth' }
    & Pick<ResponsePublicAuth, 'stateToken'>
    & { errors?: Maybe<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'message'>
    )> }
  ) }
);


export const ListMajorSiteDocument = gql`
    query ListMajorSite {
  ListMajorSite {
    list_major_id
    major
    major_image
    major_desc
  }
}
    `;

export function useListMajorSiteQuery(options: Omit<Urql.UseQueryArgs<ListMajorSiteQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ListMajorSiteQuery>({ query: ListMajorSiteDocument, ...options });
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
export const ListPresentersDocument = gql`
    query ListPresenters {
  Presenters {
    presenter_name
    presenter_photo
    presenter_id
  }
}
    `;

export function useListPresentersQuery(options: Omit<Urql.UseQueryArgs<ListPresentersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ListPresentersQuery>({ query: ListPresentersDocument, ...options });
};
export const ListClassOpenRegisterDocument = gql`
    query ListClassOpenRegister {
  ClassOpenRegister {
    class_campus_id
    class_campus_name
  }
}
    `;

export function useListClassOpenRegisterQuery(options: Omit<Urql.UseQueryArgs<ListClassOpenRegisterQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ListClassOpenRegisterQuery>({ query: ListClassOpenRegisterDocument, ...options });
};
export const WaveRegisterationDocument = gql`
    query WaveRegisteration {
  WavetRegister {
    wave_registration_id
    wave
  }
}
    `;

export function useWaveRegisterationQuery(options: Omit<Urql.UseQueryArgs<WaveRegisterationQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<WaveRegisterationQuery>({ query: WaveRegisterationDocument, ...options });
};
export const ReligionRegisterDocument = gql`
    query ReligionRegister {
  ReligionRegister {
    religion_id
    religion_name
  }
}
    `;

export function useReligionRegisterQuery(options: Omit<Urql.UseQueryArgs<ReligionRegisterQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ReligionRegisterQuery>({ query: ReligionRegisterDocument, ...options });
};
export const SourceInfoDocument = gql`
    query SourceInfo {
  SourceInfo {
    source_id
    source_information_name
  }
}
    `;

export function useSourceInfoQuery(options: Omit<Urql.UseQueryArgs<SourceInfoQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SourceInfoQuery>({ query: SourceInfoDocument, ...options });
};
export const ProfessionDocument = gql`
    query Profession {
  Profession {
    profession_id
    profession
  }
}
    `;

export function useProfessionQuery(options: Omit<Urql.UseQueryArgs<ProfessionQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ProfessionQuery>({ query: ProfessionDocument, ...options });
};
export const WavetRegisterDocument = gql`
    query WavetRegister {
  WavetRegister {
    wave_registration_id
    wave
    wave_desc
  }
}
    `;

export function useWavetRegisterQuery(options: Omit<Urql.UseQueryArgs<WavetRegisterQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<WavetRegisterQuery>({ query: WavetRegisterDocument, ...options });
};
export const SchoolYearRegisterDocument = gql`
    query SchoolYearRegister {
  SchoolYearRegister {
    school_year_id
    school_year_value
    status_school_year
  }
}
    `;

export function useSchoolYearRegisterQuery(options: Omit<Urql.UseQueryArgs<SchoolYearRegisterQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SchoolYearRegisterQuery>({ query: SchoolYearRegisterDocument, ...options });
};
export const EducationListRegisterDocument = gql`
    query EducationListRegister {
  EducationListRegister {
    education_list_id
    education
  }
}
    `;

export function useEducationListRegisterQuery(options: Omit<Urql.UseQueryArgs<EducationListRegisterQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<EducationListRegisterQuery>({ query: EducationListRegisterDocument, ...options });
};
export const ProspectiveInfoDocument = gql`
    query prospectiveInfo {
  prospectiveInfo {
    prospective_students_id
    reg_code
    id_class_campus
    class_campus
    wave
    wave_desc
    year
  }
}
    `;

export function useProspectiveInfoQuery(options: Omit<Urql.UseQueryArgs<ProspectiveInfoQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ProspectiveInfoQuery>({ query: ProspectiveInfoDocument, ...options });
};
export const PaymenttypesDocument = gql`
    query paymenttypes {
  paymenttypes {
    payment_id
    payment_type
    destination_pay
    destination_name
    destination_image
  }
}
    `;

export function usePaymenttypesQuery(options: Omit<Urql.UseQueryArgs<PaymenttypesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PaymenttypesQuery>({ query: PaymenttypesDocument, ...options });
};
export const TotalPricesDocument = gql`
    query totalPrices($id: String!) {
  totalPrices(options: {id: $id}) {
    Total
    discount
    TotAndDis
  }
}
    `;

export function useTotalPricesQuery(options: Omit<Urql.UseQueryArgs<TotalPricesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<TotalPricesQuery>({ query: TotalPricesDocument, ...options });
};
export const TransactionsStateDocument = gql`
    query TransactionsState($id: String!) {
  TransactionsState(options: {id: $id}) {
    transaction_id
    concerned_id
    amount
    va_number
    currency
    merchant_id
    payment_type
    destination_pay
    destination_name
    transaction_expired
  }
}
    `;

export function useTransactionsStateQuery(options: Omit<Urql.UseQueryArgs<TransactionsStateQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<TransactionsStateQuery>({ query: TransactionsStateDocument, ...options });
};
export const SourceInfoOneDocument = gql`
    query SourceInfoOne($id: String!) {
  SourceInfoOne(options: {id: $id}) {
    source_id
    source_information_name
  }
}
    `;

export function useSourceInfoOneQuery(options: Omit<Urql.UseQueryArgs<SourceInfoOneQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SourceInfoOneQuery>({ query: SourceInfoOneDocument, ...options });
};
export const DistrictFromProvDocument = gql`
    query DistrictFromProv($province_id: String!) {
  ProvinceDistrict(options: {province_id: $province_id}) {
    district_or_city_id
    district_or_city_name
  }
}
    `;

export function useDistrictFromProvQuery(options: Omit<Urql.UseQueryArgs<DistrictFromProvQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<DistrictFromProvQuery>({ query: DistrictFromProvDocument, ...options });
};
export const MajorFromClassCampusDocument = gql`
    query majorFromClassCampus($id_class_campus: String!) {
  majorFromClassCampus(options: {id_class_campus: $id_class_campus}) {
    list_major_id
    major
  }
}
    `;

export function useMajorFromClassCampusQuery(options: Omit<Urql.UseQueryArgs<MajorFromClassCampusQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MajorFromClassCampusQuery>({ query: MajorFromClassCampusDocument, ...options });
};
export const ListPricesRegisterDocument = gql`
    query ListPricesRegister($id_major: String!) {
  ListPricesRegister(options: {id_major: $id_major}) {
    list_price_id
    list_price_desc
    list_price_value
  }
}
    `;

export function useListPricesRegisterQuery(options: Omit<Urql.UseQueryArgs<ListPricesRegisterQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ListPricesRegisterQuery>({ query: ListPricesRegisterDocument, ...options });
};
export const AuthStateCodeDocument = gql`
    query AuthStateCode {
  StataeCode {
    inforeq {
      prospective_students_id
      reg_code
      full_name
      email
      phone_number
      religion
      district_or_city
      address
      graduation_year
      major
      school_year
      date_registration
      total_investment
    }
    stateToken
    error {
      message
    }
  }
}
    `;

export function useAuthStateCodeQuery(options: Omit<Urql.UseQueryArgs<AuthStateCodeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AuthStateCodeQuery>({ query: AuthStateCodeDocument, ...options });
};
export const LisMajorRegisterStateDocument = gql`
    mutation LisMajorRegisterState($id_class_campus: String!) {
  ListMajorsRegister(options: {id_class_campus: $id_class_campus}) {
    list_major_id
    major
    major_image
    major_desc
  }
}
    `;

export function useLisMajorRegisterStateMutation() {
  return Urql.useMutation<LisMajorRegisterStateMutation, LisMajorRegisterStateMutationVariables>(LisMajorRegisterStateDocument);
};
export const RegistrationTransactionsCreateDocument = gql`
    mutation RegistrationTransactionsCreate($id_payment: String!) {
  RegistrationTransactionsCreate(options: {id_payment: $id_payment}) {
    errors {
      message
    }
    tr_id
    reg_code
    va_number
    amount
    expired
  }
}
    `;

export function useRegistrationTransactionsCreateMutation() {
  return Urql.useMutation<RegistrationTransactionsCreateMutation, RegistrationTransactionsCreateMutationVariables>(RegistrationTransactionsCreateDocument);
};
export const MutRegistrationSubmitDocument = gql`
    mutation MutRegistrationSubmit($full_name: String!, $place_of_birth: String!, $date_of_birth: String!, $gender: String!, $email: String!, $phone_number: String!, $school_origin: String!, $address: String!, $postal_code_number: String!, $parents_name: String!, $house_phone_number: String!, $id_school_year: String!, $graduation_year: String!, $parents_profession: String!, $id_education_list: String!, $id_district_or_city: String!, $id_religion: String!, $id_source_info: String!, $id_wave_register: String!, $id_major: String!, $id_presenter: String!) {
  RegistrationSubmit(
    options: {full_name: $full_name, place_of_birth: $place_of_birth, date_of_birth: $date_of_birth, gender: $gender, email: $email, phone_number: $phone_number, school_origin: $school_origin, address: $address, postal_code_number: $postal_code_number, parents_name: $parents_name, house_phone_number: $house_phone_number, graduation_year: $graduation_year, id_school_year: $id_school_year, parents_profession: $parents_profession, id_education_list: $id_education_list, id_district_or_city: $id_district_or_city, id_religion: $id_religion, id_source_info: $id_source_info, id_wave_register: $id_wave_register, id_major: $id_major, id_presenter: $id_presenter}
  ) {
    reg_code
    concerned_id
  }
}
    `;

export function useMutRegistrationSubmitMutation() {
  return Urql.useMutation<MutRegistrationSubmitMutation, MutRegistrationSubmitMutationVariables>(MutRegistrationSubmitDocument);
};
export const PublicAuthStateDocument = gql`
    mutation PublicAuthState($reg_code: String!) {
  PublicAuth(options: {reg_code: $reg_code}) {
    stateToken
    errors {
      message
    }
  }
}
    `;

export function usePublicAuthStateMutation() {
  return Urql.useMutation<PublicAuthStateMutation, PublicAuthStateMutationVariables>(PublicAuthStateDocument);
};