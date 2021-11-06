import { ArrowsExpandIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";

import Cookies from "js-cookie";
import { useMutRegistrationSubmitMutation } from "../src/generated/graphql";
import { useRouter } from "next/router";
import { ValidationSubmitRegister } from "../src/ActionTypes";

import {
  useSchoolYearRegisterQuery,
  useEducationListRegisterQuery,
  useSourceInfoOneQuery,
  useWavetRegisterQuery,
  useDistrictFromProvQuery,
  useSourceInfoQuery,
  useMajorFromClassCampusQuery,
  useReligionRegisterQuery,
  useProfessionQuery,
  usePublicAuthStateMutation,
  useListProvincesQuery,
  useListPresentersQuery,
} from "../src/generated/graphql";

export default function HomeRegister() {
  const Root = useRouter();

  //Set Wrning
  const [erEmail, setErrEmail] = useState(false);
  const [warningemail, setWarningemail] = useState("");
  const [erPhone, setErrPhone] = useState(false);
  const [warningPhone, setWarningPhone] = useState("");
  const [Errname, setErrname] = useState(false);
  const [Warningname, setWarningname] = useState("");
  const [ErrPlace, setErrPlace] = useState(false);
  const [WarningPlace, setWarningPlace] = useState("");
  const [ErrDate, setErrDate] = useState(false);
  const [WarningDate, setWarningDate] = useState("");
  const [ErrGender, setErrGender] = useState(false);
  const [WarningGender, setWarningGender] = useState("");
  const [ErrReligion, setErrReligion] = useState(false);
  const [WarningReligion, setWarningReligion] = useState("");
  const [ErrDistric, setErrDistric] = useState(false);
  const [WarningDistric, setWarningDistric] = useState("");
  const [ErrAddress, setErrAddress] = useState(false);
  const [WarningAddress, setWarningAddress] = useState("");
  const [ErrEdu, setErrEdu] = useState(false);
  const [WarningEdu, setWarningEdu] = useState("");
  const [ErrOri, setErrOri] = useState(false);
  const [WarningOri, setWarningOri] = useState("");
  const [ErrPortal, setErrPortal] = useState(false);
  const [WarningPortal, setWarningPortal] = useState("");
  const [ErrYear, setErrYear] = useState(false);
  const [WarningYear, setWarningYear] = useState("");
  const [ErrPresent, setErrPresent] = useState(false);
  const [WarningPresent, setWarningPresent] = useState("");
  const [ErrHouse, setErrHouse] = useState(false);
  const [WarningHouse, setWarningHouse] = useState("");
  const [ErrPro, setErrPro] = useState(false);
  const [WarningPro, setWarningPro] = useState("");
  const [ErrMajor, setErrMajor] = useState(false);
  const [WarningMajor, setWarningMajor] = useState("");
  const [ErrSource, setErrSource] = useState(false);
  const [WarningSource, setWarningSource] = useState("");
  const [ErrPres, setErrPres] = useState(false);
  const [WarningPres, setWarningPres] = useState("");
  //Set Wrning
  //Set Field
  const [FieldPresenter, SetFieldPresenter] = useState("");
  const [FieldName, SetFieldName] = useState("");
  const [PlaceOfBirth, SetPlaceOfBirth] = useState("");
  const [DateOfBirth, SetDateOfBirth] = useState("");
  const [Email, SetEmail] = useState("");
  const [Phone, SetPhone] = useState("");
  const [Gender, SetGender] = useState("");
  const [FReligion, SetReligion] = useState("");
  const [District, SetDistrict] = useState("");
  const [Address, SetAddress] = useState("");

  const [Origin, SetOrigin] = useState("");
  const [GuardYear, SetGuardYear] = useState("");
  const [Portal, SetPortal] = useState("");
  const [Persent, SetPersent] = useState("");
  const [Propesional, SetPropesional] = useState("");
  const [House, SetHouse] = useState("");
  const [Major, SetMajor] = useState("");

  const [education, Seteducation] = useState("");
  //Set Field
  const [DistList, SetDistList] = useState("");
  const [, ReqCodeState] = usePublicAuthStateMutation();
  const [, MutRegistrationSubmit] = useMutRegistrationSubmitMutation();
  const [loading, Setloading] = useState(false);
  const [HandleSource, SetHandleSource] = useState("");
  const State = Cookies.getJSON("TokenStateClass");
  const majordata = useMajorFromClassCampusQuery({
    variables: { id_class_campus: State },
  });
  const Religion = useReligionRegisterQuery();
  const Profession = useProfessionQuery();
  const source = useSourceInfoQuery();
  const Presenters = useListPresentersQuery();
  const [{ data }] = useListProvincesQuery();

  const [Source] = useSourceInfoOneQuery({ variables: { id: HandleSource } });
  const EducationList = useEducationListRegisterQuery();
  const Lis = useDistrictFromProvQuery({
    variables: { province_id: DistList },
  });
  const [WavetRegister] = useWavetRegisterQuery();
  const [Year] = useSchoolYearRegisterQuery();
  const [pres, setpres] = useState(false);
  const [err, SerErr] = useState(false);
  useEffect(() => {
    if (Source.data?.SourceInfoOne?.source_information_name === "Presentasi") {
      setpres(true);
    } else {
      setpres(false);
      SetFieldPresenter("");
    }
  }, [Source]);

  const HandleSubmitRegister = async (e: any) => {
    e.preventDefault();
    const DataSub = {
      full_name: FieldName,
      place_of_birth: PlaceOfBirth,
      date_of_birth: DateOfBirth,
      gender: Gender,
      email: Email,
      phone_number: Phone,
      school_origin: Origin,
      address: Address,
      postal_code_number: Portal,
      parents_name: Persent,
      house_phone_number: House,
      graduation_year: GuardYear,
      id_school_year: Year?.data?.SchoolYearRegister?.school_year_id!,
      parents_profession: Propesional,
      id_education_list: education,
      id_district_or_city: District,
      id_religion: FReligion,
      id_source_info: HandleSource,
      id_wave_register:
        WavetRegister?.data?.WavetRegister?.wave_registration_id!,
      id_major: Major,
    };
    if (ValidationSubmitRegister(DataSub)) {
      SerErr(false);
      Setloading(true);
      try {
        const MutSubmit = await MutRegistrationSubmit({
          full_name: FieldName,
          place_of_birth: PlaceOfBirth,
          date_of_birth: DateOfBirth,
          gender: Gender,
          email: Email,
          phone_number: Phone,
          school_origin: Origin,
          address: Address,
          postal_code_number: Portal,
          parents_name: Persent,
          house_phone_number: House,
          graduation_year: GuardYear,
          id_school_year: Year?.data?.SchoolYearRegister?.school_year_id!,
          parents_profession: Propesional,
          id_education_list: education,
          id_district_or_city: District,
          id_religion: FReligion,
          id_source_info: HandleSource,
          id_wave_register:
            WavetRegister?.data?.WavetRegister?.wave_registration_id!,
          id_major: Major,
          id_presenter: FieldPresenter,
        });
        // const ResStateCode = await ReqCodeState({
        //   reg_code: "PMB201202161711257",
        // });
        //accessToken
        if (MutSubmit.data?.RegistrationSubmit) {
          Cookies.set(
            "accessToken",
            MutSubmit.data?.RegistrationSubmit.concerned_id
          );
          Cookies.set("RegID", MutSubmit.data?.RegistrationSubmit.reg_code);

          Root.push("inforegistration/payment");
        }
        setTimeout(() => {
          Setloading(false);
        }, 8000);
      } catch (error) {
        console.log(error);
      }
    } else {
      SerErr(true);
    }
  };

  return (
    <div className="relative bg-white overflow-hidden bg-heroreg bg-center bg-cover ">
      <div className="wax-h-max flex flex justify-center pt-20">
        <div className="relative py-3 lg:mb-20">
          <div className="relative pb-8 bg-white md:pb-20 lg:max-w-3xl lg:w-full lg:pb-28 xl:pb-32 rounded-3xl shadow-lg p-9 mb-5  opacity-90">
            <main className=" mx-auto max-w-full px-4 sm:mt-11 sm:px-6 md:mt-13 lg:mt-20 lg:px-8 ">
              <div className="sm:text-center lg:text-center text-center transform ">
                <h1 className="text-5xl tracking-tight font-extrabold font-mono text-gray-900 sm:text-5xl md:text-6xl xl:text-6xl">
                  <span className="block text-indigo-600 xl:inline ">
                    Pendaftaran
                  </span>
                </h1>
              </div>

              <div className="mt-5 sm:mt-10 p-5">
                <form action="#" method="POST" onSubmit={HandleSubmitRegister}>
                  <div className=" overflow-hidden">
                    <div className="grid grid-cols-6 gap-6">
                      <div
                        className={
                          "col-span-12 sm:col-span-6 " +
                          (loading ? "animate-pulse" : " ")
                        }
                      >
                        <label className="block text-xl text-gray-900 mb-3">
                          Nama Lengkap
                        </label>

                        <div className="rounded-md shadow-sm -space-y-px">
                          <div>
                            <input
                              name="full_name"
                              type="text"
                              autoComplete="off"
                              className="appearance-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl lg:mb-5"
                              placeholder="Nama Lengkap"
                              disabled={loading}
                              onChange={(e) => {
                                if (e.target.value === "") {
                                  setErrname(true);
                                  setWarningname("this must be filled");
                                } else if (e.target.value.length < 7) {
                                  setErrname(true);
                                  setWarningname("this must be more than 6");
                                } else {
                                  setErrname(false);
                                  setWarningname("");
                                  SetFieldName(e.target.value);
                                }
                              }}
                            />
                            <p className="text-sm text-red-600 ml-5">
                              {Errname ? Warningname : null}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          "col-span-12 sm:col-span-3 " +
                          (loading ? "animate-pulse" : " ")
                        }
                      >
                        <label className="block text-xl text-gray-900 mb-3">
                          Tempat Lahir
                        </label>

                        <div className="rounded-md shadow-sm -space-y-px">
                          <div>
                            <input
                              name="place_of_birth"
                              type="text"
                              autoComplete="off"
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl lg:mb-5"
                              placeholder="Tempat Lahir"
                              disabled={loading}
                              onChange={(e) => {
                                if (e.target.value === "") {
                                  setErrPlace(true);
                                  setWarningPlace("this must be filled");
                                } else if (e.target.value.length < 7) {
                                  setErrPlace(true);
                                  setWarningPlace("this must be more than 6");
                                } else {
                                  setErrPlace(false);
                                  setWarningPlace("");
                                  SetPlaceOfBirth(e.target.value);
                                }
                              }}
                            />
                            <p className="text-sm text-red-600 ml-5">
                              {ErrPlace ? WarningPlace : null}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          "col-span-12 sm:col-span-3 " +
                          (loading ? "animate-pulse" : " ")
                        }
                      >
                        <label className="block text-xl text-gray-900 mb-3">
                          Tanggal Lahir
                        </label>

                        <div className="rounded-md shadow-sm -space-y-px">
                          <div>
                            <input
                              name="date_of_birth"
                              type="date"
                              autoComplete="off"
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl lg:mb-5"
                              placeholder="Tanggal Lahir"
                              disabled={loading}
                              onChange={(e) => {
                                if (e.target.value === "") {
                                  setErrDate(true);
                                  setWarningDate("this must be filled");
                                } else {
                                  setErrDate(false);
                                  setWarningDate("");
                                  SetDateOfBirth(e.target.value);
                                }
                              }}
                            />
                            <p className="text-sm text-red-600 ml-5">
                              {ErrDate ? WarningDate : null}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          "col-span-12 sm:col-span-3 " +
                          (loading ? "animate-pulse" : " ")
                        }
                      >
                        <label className="block text-xl text-gray-900 mb-3">
                          Email
                        </label>

                        <div className="rounded-md shadow-sm -space-y-px">
                          <div>
                            <input
                              name="email"
                              type="email"
                              autoComplete="off"
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl lg:mb-5"
                              placeholder="Email"
                              disabled={loading}
                              onChange={(e) => {
                                const emailExp =
                                  /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
                                if (!emailExp.test(e.target.value)) {
                                  setErrEmail(true);
                                  setWarningemail(
                                    "this field must contain a valid email"
                                  );
                                } else {
                                  setErrEmail(false);
                                  setWarningemail("");
                                  SetEmail(e.target.value);
                                }
                              }}
                            />
                            <p className="text-sm text-red-600 ml-5">
                              {erEmail ? warningemail : null}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          "col-span-12 sm:col-span-3 " +
                          (loading ? "animate-pulse" : " ")
                        }
                      >
                        <label className="block text-xl text-gray-900 mb-3">
                          Telepon Atau WhatsApp
                        </label>

                        <div className="rounded-md shadow-sm -space-y-px">
                          <div>
                            <input
                              name="phone_number"
                              type="text"
                              autoComplete="off"
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl lg:mb-5"
                              placeholder="Telepon Atau WhatsApp "
                              disabled={loading}
                              onChange={(e) => {
                                const PhoneExp =
                                  /^(\+62|62|0)8[1-9][0-9]{6,10}$/;
                                if (!PhoneExp.test(e.target.value)) {
                                  setErrPhone(true);
                                  setWarningPhone(
                                    "this field must contain a valid phone number"
                                  );
                                } else {
                                  setErrPhone(false);
                                  setWarningPhone("");
                                  SetPhone(e.target.value);
                                }
                              }}
                            />
                            <p className="text-sm text-red-600 ml-5">
                              {erPhone ? warningPhone : null}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          "col-span-12 sm:col-span-3 " +
                          (loading ? "animate-pulse" : " ")
                        }
                      >
                        <label className="block text-xl text-gray-900 mb-3">
                          Jenis Kelamin
                        </label>

                        <div className="rounded-md shadow-sm -space-y-px">
                          <div>
                            <select
                              name="gender"
                              autoComplete="off"
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl lg:mb-5"
                              disabled={loading}
                              onChange={(e) => {
                                if (e.target.value === "") {
                                  setErrGender(true);
                                  setWarningGender("this must be filled");
                                } else {
                                  setErrGender(false);
                                  setWarningGender("");
                                  SetGender(e.target.value);
                                }
                              }}
                            >
                              <option value="">-Jenis Kelamin-</option>
                              <option value="Male">Laki-Laki</option>
                              <option value="Female">Perempuan</option>
                            </select>
                            <p className="text-sm text-red-600 ml-5">
                              {ErrGender ? WarningGender : null}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          "col-span-12 sm:col-span-3 " +
                          (loading ? "animate-pulse" : " ")
                        }
                      >
                        <label className="block text-xl text-gray-900 mb-3">
                          Agama
                        </label>

                        <div className="rounded-md shadow-sm -space-y-px">
                          <div>
                            <select
                              name="id_religion"
                              autoComplete="off"
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl lg:mb-5"
                              disabled={loading}
                              onChange={(e) => {
                                if (e.target.value === "") {
                                  setErrReligion(true);
                                  setWarningReligion("this must be filled");
                                } else {
                                  setErrReligion(false);
                                  setWarningReligion("");
                                  SetReligion(e.target.value);
                                }
                              }}
                            >
                              <option>-Agama-</option>
                              {Religion[0].data?.ReligionRegister ? (
                                Religion[0].data?.ReligionRegister.map((re) => (
                                  <option
                                    value={re.religion_id}
                                    key={re.religion_id}
                                  >
                                    {re.religion_name}
                                  </option>
                                ))
                              ) : (
                                <option>-Agama-</option>
                              )}
                            </select>
                            <p className="text-sm text-red-600 ml-5">
                              {ErrReligion ? WarningReligion : null}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          "col-span-12 sm:col-span-3 " +
                          (loading ? "animate-pulse" : " ")
                        }
                      >
                        <label className="block text-xl text-gray-900 mb-3">
                          Provinsi
                        </label>

                        <div className="rounded-md shadow-sm -space-y-px">
                          <div>
                            <select
                              name="province"
                              autoComplete="off"
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl lg:mb-5"
                              onChange={(e) => {
                                SetDistList(e.target.value);
                              }}
                              disabled={loading}
                            >
                              <option>-Provinsi-</option>
                              {data?.Provinces.map((prov) => (
                                <option
                                  value={prov.province_id}
                                  key={prov.province_id}
                                >
                                  {prov.province_name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          "col-span-12 sm:col-span-3 " +
                          (loading ? "animate-pulse" : " ")
                        }
                      >
                        <label className="block text-xl text-gray-900 mb-3">
                          Kabupatan Atau Kota
                        </label>

                        <div className="rounded-md shadow-sm -space-y-px">
                          <div>
                            <select
                              name="id_district_or_city"
                              autoComplete="off"
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl lg:mb-5"
                              disabled={loading}
                              onChange={(e) => {
                                if (e.target.value === "") {
                                  setErrDistric(true);
                                  setWarningDistric("this must be filled");
                                } else {
                                  setErrDistric(false);
                                  setWarningDistric("");
                                  SetDistrict(e.target.value);
                                }
                              }}
                            >
                              <option value="">- Kabupatan Atau Kota-</option>
                              {Lis[0].data?.ProvinceDistrict ? (
                                Lis[0].data?.ProvinceDistrict?.map((ds) => (
                                  <option
                                    value={ds.district_or_city_id!}
                                    key={ds.district_or_city_id}
                                  >
                                    {ds.district_or_city_name}
                                  </option>
                                ))
                              ) : (
                                <option value="">- Kabupatan Atau Kota-</option>
                              )}
                            </select>
                            <p className="text-sm text-red-600 ml-5">
                              {ErrDistric ? WarningDistric : null}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          "col-span-12 sm:col-span-6 " +
                          (loading ? "animate-pulse" : " ")
                        }
                      >
                        <label className="block text-xl text-gray-900 mb-3">
                          Alamat
                        </label>

                        <div className="rounded-md shadow-sm -space-y-px">
                          <div>
                            <textarea
                              name="address"
                              autoComplete="off"
                              rows={4}
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl lg:mb-5"
                              placeholder="Address"
                              disabled={loading}
                              onChange={(e) => {
                                if (e.target.value === "") {
                                  setErrAddress(true);
                                  setWarningAddress("this must be filled");
                                } else if (e.target.value.length < 7) {
                                  setErrAddress(true);
                                  setWarningAddress("this must be more than 6");
                                } else {
                                  setErrAddress(false);
                                  setWarningAddress("");
                                  SetAddress(e.target.value);
                                }
                              }}
                            />
                            <p className="text-sm text-red-600 ml-5">
                              {ErrAddress ? WarningAddress : null}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          "col-span-12 sm:col-span-3 " +
                          (loading ? "animate-pulse" : " ")
                        }
                      >
                        <label className="block text-xl text-gray-900 mb-3">
                          PKode Pos
                        </label>

                        <div className="rounded-md shadow-sm -space-y-px">
                          <div>
                            <input
                              name="postal_code_number"
                              type="text"
                              autoComplete="off"
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl lg:mb-5"
                              placeholder="PKode Pos"
                              disabled={loading}
                              onChange={(e) => {
                                const PorExp = /^[0-9]{4,6}$/;
                                if (!PorExp.test(e.target.value)) {
                                  setErrPortal(true);
                                  setWarningPortal(
                                    "this field must contain a valid  number"
                                  );
                                } else {
                                  setErrPortal(false);
                                  setWarningPortal("");
                                  SetPortal(e.target.value);
                                }
                              }}
                            />
                            <p className="text-sm text-red-600 ml-5">
                              {ErrPortal ? WarningPortal : null}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          "col-span-12 sm:col-span-3 " +
                          (loading ? "animate-pulse" : " ")
                        }
                      >
                        <label className="block text-xl text-gray-900 mb-3">
                          Pendidikan Terakhir
                        </label>

                        <div className="rounded-md shadow-sm -space-y-px">
                          <div>
                            <select
                              name="id_education_list"
                              autoComplete="off"
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl lg:mb-5"
                              disabled={loading}
                              onChange={(e) => {
                                if (e.target.value === "") {
                                  setErrEdu(true);
                                  setWarningEdu("this must be filled");
                                } else {
                                  setErrEdu(false);
                                  setWarningEdu("");
                                  Seteducation(e.target.value);
                                }
                              }}
                            >
                              <option value="">-Pendidikan Terakhir-</option>
                              {EducationList[0].data?.EducationListRegister ? (
                                EducationList[0].data.EducationListRegister.map(
                                  (ed) => (
                                    <option
                                      value={ed.education_list_id}
                                      key={ed.education_list_id}
                                    >
                                      {ed.education}
                                    </option>
                                  )
                                )
                              ) : (
                                <option value="">-Pendidikan Terakhir-</option>
                              )}
                            </select>
                            <p className="text-sm text-red-600 ml-5">
                              {ErrEdu ? WarningEdu : null}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          "col-span-12 sm:col-span-3 " +
                          (loading ? "animate-pulse" : " ")
                        }
                      >
                        <label className="block text-xl text-gray-900 mb-3">
                          Alamat Sekolah
                        </label>

                        <div className="rounded-md shadow-sm -space-y-px">
                          <div>
                            <input
                              name="school_origin"
                              type="text"
                              autoComplete="off"
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl lg:mb-5"
                              placeholder="Alamat Sekolah"
                              disabled={loading}
                              onChange={(e) => {
                                if (e.target.value === "") {
                                  setErrOri(true);
                                  setWarningOri("this must be filled");
                                } else if (e.target.value.length < 7) {
                                  setErrOri(true);
                                  setWarningOri("this must be more than 6");
                                } else {
                                  setErrOri(false);
                                  setWarningOri("");
                                  SetOrigin(e.target.value);
                                }
                              }}
                            />
                            <p className="text-sm text-red-600 ml-5">
                              {ErrOri ? WarningOri : null}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          "col-span-12 sm:col-span-3 " +
                          (loading ? "animate-pulse" : " ")
                        }
                      >
                        <label className="block text-xl text-gray-900 mb-3">
                          Tahun Lulus
                        </label>

                        <div className="rounded-md shadow-sm -space-y-px">
                          <div>
                            <input
                              name="graduation_year"
                              type="text"
                              autoComplete="off"
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl lg:mb-5"
                              placeholder="Tahun Lulus"
                              disabled={loading}
                              onChange={(e) => {
                                const PorExp = /^[0-9]{4}$/;
                                if (!PorExp.test(e.target.value)) {
                                  setErrYear(true);
                                  setWarningYear(
                                    "this field must contain a valid  number"
                                  );
                                } else {
                                  setErrYear(false);
                                  setWarningYear("");
                                  SetGuardYear(e.target.value);
                                }
                              }}
                            />
                            <p className="text-sm text-red-600 ml-5">
                              {ErrYear ? WarningYear : null}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        className={
                          "col-span-12 sm:col-span-6 " +
                          (loading ? "animate-pulse" : " ")
                        }
                      >
                        <label className="block text-xl text-gray-900 mb-3">
                          Nama Orangtua Atau Wali
                        </label>

                        <div className="rounded-md shadow-sm -space-y-px">
                          <div>
                            <input
                              name="parents_name"
                              type="text"
                              autoComplete="off"
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl lg:mb-5"
                              placeholder="Nama Orangtua Atau Wali"
                              disabled={loading}
                              onChange={(e) => {
                                if (e.target.value === "") {
                                  setErrPresent(true);
                                  setWarningPresent("this must be filled");
                                } else if (e.target.value.length < 7) {
                                  setErrPresent(true);
                                  setWarningPresent("this must be more than 6");
                                } else {
                                  setErrPresent(false);
                                  setWarningPresent("");
                                  SetPersent(e.target.value);
                                }
                              }}
                            />
                            <p className="text-sm text-red-600 ml-5">
                              {ErrPresent ? WarningPresent : null}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          "col-span-12 sm:col-span-3 " +
                          (loading ? "animate-pulse" : " ")
                        }
                      >
                        <label className="block text-xl text-gray-900 mb-3">
                          Pekerjaan Orangtua
                        </label>

                        <div className="rounded-md shadow-sm -space-y-px">
                          <div>
                            <select
                              name="parents_profession"
                              autoComplete="off"
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl lg:mb-5"
                              disabled={loading}
                              onChange={(e) => {
                                if (e.target.value === "") {
                                  setErrPro(true);
                                  setWarningPro("this must be filled");
                                } else {
                                  setErrPro(false);
                                  setWarningPro("");
                                  SetPropesional(e.target.value);
                                }
                              }}
                            >
                              <option value="">-Pekerjaan Orangtua-</option>
                              {Profession[0].data?.Profession ? (
                                Profession[0].data?.Profession.map((pro) => (
                                  <option
                                    value={pro.profession_id}
                                    key={pro.profession_id}
                                  >
                                    {pro.profession}
                                  </option>
                                ))
                              ) : (
                                <option value="">-Pekerjaan Orangtua-</option>
                              )}
                            </select>
                            <p className="text-sm text-red-600 ml-5">
                              {ErrPro ? WarningPro : null}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          "col-span-12 sm:col-span-3 " +
                          (loading ? "animate-pulse" : " ")
                        }
                      >
                        <label className="block text-xl text-gray-900 mb-3">
                          Telepon Rumah Atau Telepon Orangtua
                        </label>

                        <div className="rounded-md shadow-sm -space-y-px">
                          <div>
                            <input
                              name="house_phone_number"
                              type="text"
                              autoComplete="off"
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl lg:mb-5"
                              placeholder="Telepon Rumah Atau Telepon Orangtua"
                              disabled={loading}
                              onChange={(e) => {
                                const PhoneExp =
                                  /^(\+62|62|0)8[1-9][0-9]{6,10}$/;
                                if (!PhoneExp.test(e.target.value)) {
                                  setErrHouse(true);
                                  setWarningHouse(
                                    "this field must contain a valid number"
                                  );
                                } else {
                                  setErrHouse(false);
                                  setWarningHouse("");
                                  SetHouse(e.target.value);
                                }
                              }}
                            />
                            <p className="text-sm text-red-600 ml-5">
                              {ErrHouse ? WarningHouse : null}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          "col-span-12 sm:col-span-3 " +
                          (loading ? "animate-pulse" : " ")
                        }
                      >
                        <label className="block text-xl text-gray-900 mb-3">
                          Jurusan
                        </label>

                        <div className="rounded-md shadow-sm -space-y-px">
                          <div>
                            <select
                              name="id_major"
                              autoComplete="off"
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl lg:mb-5"
                              disabled={loading}
                              onChange={(e) => {
                                if (e.target.value === "") {
                                  setErrMajor(true);
                                  setWarningMajor("this must be filled");
                                } else {
                                  setErrMajor(false);
                                  setWarningMajor("");
                                  SetMajor(e.target.value);
                                }
                              }}
                            >
                              <option>-Jurusan-</option>
                              {majordata[0].data ? (
                                majordata[0].data?.majorFromClassCampus.map(
                                  (mr) => (
                                    <option
                                      key={mr.list_major_id}
                                      value={mr.list_major_id}
                                    >
                                      {mr.major}
                                    </option>
                                  )
                                )
                              ) : (
                                <option>-Jurusan-</option>
                              )}
                            </select>
                            <p className="text-sm text-red-600 ml-5">
                              {ErrMajor ? WarningMajor : null}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          "col-span-12 sm:col-span-3 " +
                          (loading ? "animate-pulse" : " ")
                        }
                      >
                        <label className="block text-xl text-gray-900 mb-3">
                          Sumber Informasi
                        </label>

                        <div className="rounded-md shadow-sm -space-y-px">
                          <div>
                            <select
                              name="id_source_info"
                              autoComplete="off"
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl lg:mb-5"
                              onChange={(e) => {
                                if (e.target.value === "") {
                                  setErrSource(true);
                                  setWarningSource("this must be filled");
                                } else {
                                  setErrSource(false);
                                  setWarningSource("");
                                  SetHandleSource(e.target.value);
                                }
                              }}
                              disabled={loading}
                            >
                              <option value="">-Sumber Informasi-</option>
                              {source[0].data?.SourceInfo ? (
                                source[0].data?.SourceInfo.map((so) => (
                                  <option
                                    key={so.source_id}
                                    value={so.source_id}
                                  >
                                    {so.source_information_name}
                                  </option>
                                ))
                              ) : (
                                <option value="">-Sumber Informasi-</option>
                              )}
                            </select>
                            <p className="text-sm text-red-600 ml-5">
                              {ErrSource ? WarningSource : null}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          "col-span-12 sm:col-span-6 " +
                          (pres ? " " : " hidden ") +
                          (loading ? "animate-pulse" : " ")
                        }
                      >
                        <label className="block text-xl text-gray-900 mb-3">
                          Presenter
                        </label>
                        <div className="rounded-md shadow-sm -space-y-px">
                          <div>
                            <select
                              name="id_presenter"
                              autoComplete="off"
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl lg:mb-5 "
                              onChange={(e) => {
                                if (e.target.value === "") {
                                  setErrPres(true);
                                  setWarningPres("this must be filled");
                                } else {
                                  setErrPres(false);
                                  setWarningPres("");
                                  SetFieldPresenter(e.target.value);
                                }
                              }}
                              disabled={loading}
                            >
                              <option value="">-Presenter-</option>
                              {pres ? (
                                Presenters[0].data?.Presenters ? (
                                  Presenters[0].data?.Presenters.map((pres) => (
                                    <option
                                      key={pres.presenter_id}
                                      value={pres.presenter_id}
                                    >
                                      {pres.presenter_name}
                                    </option>
                                  ))
                                ) : (
                                  <option value="">-Presenter-</option>
                                )
                              ) : (
                                <option value="">-Presenter-</option>
                              )}
                            </select>
                            <p className="text-sm text-red-600 ml-5">
                              {ErrPres ? WarningPres : null}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-12 sm:col-span-6 ">
                        <button
                          type="submit"
                          className="w-full flex items-center justify-center px-8 py-3 border-transparent font-semibold font-serif  md:text-2xl text-white bg-gray-700 hover:bg-gray-900 md:py-4 md:text-lg md:px-10 rounded-lg "
                          disabled={loading}
                        >
                          {loading ? (
                            <ArrowsExpandIcon className="w-10 h-10 animate-spin" />
                          ) : (
                            "Lanjutkan"
                          )}
                        </button>
                        {err ? (
                          <p className="mt-10 text-center text-lg text-red-600 font-bold">
                            Check Kembali Data Yang Anda Kirim ?
                          </p>
                        ) : (
                          <p className="mt-10 text-center text-lg text-gray-800 font-bold">
                            Tekan Untuk Melanjutkan Proses ?
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
