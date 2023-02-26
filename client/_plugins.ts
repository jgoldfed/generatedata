/**
 * This file is autogenerated. Do not edit!
 * ----------------------------------------
 **/

import Alphanumeric from './src/plugins/dataTypes/Alphanumeric/config';
import AutoIncrement from './src/plugins/dataTypes/AutoIncrement/config';
import BitcoinAddress from './src/plugins/dataTypes/BitcoinAddress/config';
import Boolean from './src/plugins/dataTypes/Boolean/config';
import CVV from './src/plugins/dataTypes/CVV/config';
import City from './src/plugins/dataTypes/City/config';
import Colour from './src/plugins/dataTypes/Colour/config';
import Company from './src/plugins/dataTypes/Company/config';
import Computed from './src/plugins/dataTypes/Computed/config';
import Constant from './src/plugins/dataTypes/Constant/config';
import Country from './src/plugins/dataTypes/Country/config';
import Currency from './src/plugins/dataTypes/Currency/config';
import Date from './src/plugins/dataTypes/Date/config';
import Email from './src/plugins/dataTypes/Email/config';
import GUID from './src/plugins/dataTypes/GUID/config';
import IBAN from './src/plugins/dataTypes/IBAN/config';
import LatLng from './src/plugins/dataTypes/LatLng/config';
import List from './src/plugins/dataTypes/List/config';
import Names from './src/plugins/dataTypes/Names/config';
import NormalDistribution from './src/plugins/dataTypes/NormalDistribution/config';
import NumberRange from './src/plugins/dataTypes/NumberRange/config';
import OrganizationNumber from './src/plugins/dataTypes/OrganizationNumber/config';
import PAN from './src/plugins/dataTypes/PAN/config';
import PIN from './src/plugins/dataTypes/PIN/config';
import PersonalNumber from './src/plugins/dataTypes/PersonalNumber/config';
import Phone from './src/plugins/dataTypes/Phone/config';
import PostalZip from './src/plugins/dataTypes/PostalZip/config';
import Region from './src/plugins/dataTypes/Region/config';
import Rut from './src/plugins/dataTypes/Rut/config';
import SIRET from './src/plugins/dataTypes/SIRET/config';
import StreetAddress from './src/plugins/dataTypes/StreetAddress/config';
import TextFixed from './src/plugins/dataTypes/TextFixed/config';
import TextRandom from './src/plugins/dataTypes/TextRandom/config';
import Time from './src/plugins/dataTypes/Time/config';
import Track1 from './src/plugins/dataTypes/Track1/config';
import Track2 from './src/plugins/dataTypes/Track2/config';
import URLs from './src/plugins/dataTypes/URLs/config';
import WeightedList from './src/plugins/dataTypes/WeightedList/config';

export const dataTypes = {
	Alphanumeric,
	AutoIncrement,
	BitcoinAddress,
	Boolean,
	CVV,
	City,
	Colour,
	Company,
	Computed,
	Constant,
	Country,
	Currency,
	Date,
	Email,
	GUID,
	IBAN,
	LatLng,
	List,
	Names,
	NormalDistribution,
	NumberRange,
	OrganizationNumber,
	PAN,
	PIN,
	PersonalNumber,
	Phone,
	PostalZip,
	Region,
	Rut,
	SIRET,
	StreetAddress,
	TextFixed,
	TextRandom,
	Time,
	Track1,
	Track2,
	URLs,
	WeightedList
};

export type DataTypeFolder = keyof typeof dataTypes;

export const blacklistedDataTypeFolders = ['BitcoinAddress','OrganizationNumber','PersonalNumber','SIRET'];

import CSV from './src/plugins/exportTypes/CSV/config';
import CSharp from './src/plugins/exportTypes/CSharp/config';
import HTML from './src/plugins/exportTypes/HTML/config';
import JSON from './src/plugins/exportTypes/JSON/config';
import Javascript from './src/plugins/exportTypes/Javascript/config';
import LDIF from './src/plugins/exportTypes/LDIF/config';
import PHP from './src/plugins/exportTypes/PHP/config';
import Perl from './src/plugins/exportTypes/Perl/config';
import Python from './src/plugins/exportTypes/Python/config';
import Ruby from './src/plugins/exportTypes/Ruby/config';
import SQL from './src/plugins/exportTypes/SQL/config';
import Typescript from './src/plugins/exportTypes/Typescript/config';
import XML from './src/plugins/exportTypes/XML/config';

export const exportTypes = {
	CSV,
	CSharp,
	HTML,
	JSON,
	Javascript,
	LDIF,
	PHP,
	Perl,
	Python,
	Ruby,
	SQL,
	Typescript,
	XML
};

export type ExportTypeFolder = keyof typeof exportTypes;

import CountryAustralia from './src/plugins/countries/Australia/bundle';
import CountryAustria from './src/plugins/countries/Austria/bundle';
import CountryBelgium from './src/plugins/countries/Belgium/bundle';
import CountryBrazil from './src/plugins/countries/Brazil/bundle';
import CountryCanada from './src/plugins/countries/Canada/bundle';
import CountryChile from './src/plugins/countries/Chile/bundle';
import CountryChina from './src/plugins/countries/China/bundle';
import CountryColombia from './src/plugins/countries/Colombia/bundle';
import CountryCostaRica from './src/plugins/countries/CostaRica/bundle';
import CountryFrance from './src/plugins/countries/France/bundle';
import CountryGermany from './src/plugins/countries/Germany/bundle';
import CountryIndia from './src/plugins/countries/India/bundle';
import CountryIndonesia from './src/plugins/countries/Indonesia/bundle';
import CountryIreland from './src/plugins/countries/Ireland/bundle';
import CountryItaly from './src/plugins/countries/Italy/bundle';
import CountryMexico from './src/plugins/countries/Mexico/bundle';
import CountryNetherlands from './src/plugins/countries/Netherlands/bundle';
import CountryNewZealand from './src/plugins/countries/NewZealand/bundle';
import CountryNigeria from './src/plugins/countries/Nigeria/bundle';
import CountryNorway from './src/plugins/countries/Norway/bundle';
import CountryPakistan from './src/plugins/countries/Pakistan/bundle';
import CountryPeru from './src/plugins/countries/Peru/bundle';
import CountryPhilippines from './src/plugins/countries/Philippines/bundle';
import CountryPoland from './src/plugins/countries/Poland/bundle';
import CountryRussia from './src/plugins/countries/Russia/bundle';
import CountrySingapore from './src/plugins/countries/Singapore/bundle';
import CountrySouthAfrica from './src/plugins/countries/SouthAfrica/bundle';
import CountrySouthKorea from './src/plugins/countries/SouthKorea/bundle';
import CountrySpain from './src/plugins/countries/Spain/bundle';
import CountrySweden from './src/plugins/countries/Sweden/bundle';
import CountryTurkey from './src/plugins/countries/Turkey/bundle';
import CountryUK from './src/plugins/countries/UK/bundle';
import CountryUS from './src/plugins/countries/US/bundle';
import CountryUkraine from './src/plugins/countries/Ukraine/bundle';
import CountryVietnam from './src/plugins/countries/Vietnam/bundle';

export const countryList = ['Australia', 'Austria', 'Belgium', 'Brazil', 'Canada', 'Chile', 'China', 'Colombia', 'CostaRica', 'France', 'Germany', 'India', 'Indonesia', 'Ireland', 'Italy', 'Mexico', 'Netherlands', 'NewZealand', 'Nigeria', 'Norway', 'Pakistan', 'Peru', 'Philippines', 'Poland', 'Russia', 'Singapore', 'SouthAfrica', 'SouthKorea', 'Spain', 'Sweden', 'Turkey', 'UK', 'US', 'Ukraine', 'Vietnam'];
export const countries = ['Australia', 'Austria', 'Belgium', 'Brazil', 'Canada', 'Chile', 'China', 'Colombia', 'CostaRica', 'France', 'Germany', 'India', 'Indonesia', 'Ireland', 'Italy', 'Mexico', 'Netherlands', 'NewZealand', 'Nigeria', 'Norway', 'Pakistan', 'Peru', 'Philippines', 'Poland', 'Russia', 'Singapore', 'SouthAfrica', 'SouthKorea', 'Spain', 'Sweden', 'Turkey', 'UK', 'US', 'Ukraine', 'Vietnam'] as const;
export const countryMethods = {
	Australia: CountryAustralia,
	Austria: CountryAustria,
	Belgium: CountryBelgium,
	Brazil: CountryBrazil,
	Canada: CountryCanada,
	Chile: CountryChile,
	China: CountryChina,
	Colombia: CountryColombia,
	CostaRica: CountryCostaRica,
	France: CountryFrance,
	Germany: CountryGermany,
	India: CountryIndia,
	Indonesia: CountryIndonesia,
	Ireland: CountryIreland,
	Italy: CountryItaly,
	Mexico: CountryMexico,
	Netherlands: CountryNetherlands,
	NewZealand: CountryNewZealand,
	Nigeria: CountryNigeria,
	Norway: CountryNorway,
	Pakistan: CountryPakistan,
	Peru: CountryPeru,
	Philippines: CountryPhilippines,
	Poland: CountryPoland,
	Russia: CountryRussia,
	Singapore: CountrySingapore,
	SouthAfrica: CountrySouthAfrica,
	SouthKorea: CountrySouthKorea,
	Spain: CountrySpain,
	Sweden: CountrySweden,
	Turkey: CountryTurkey,
	UK: CountryUK,
	US: CountryUS,
	Ukraine: CountryUkraine,
	Vietnam: CountryVietnam
};

export enum DataType {
	Alphanumeric = 'Alphanumeric',
	AutoIncrement = 'AutoIncrement',
	Boolean = 'Boolean',
	CVV = 'CVV',
	City = 'City',
	Colour = 'Colour',
	Company = 'Company',
	Computed = 'Computed',
	Constant = 'Constant',
	Country = 'Country',
	Currency = 'Currency',
	Date = 'Date',
	Email = 'Email',
	GUID = 'GUID',
	IBAN = 'IBAN',
	LatLng = 'LatLng',
	List = 'List',
	Names = 'Names',
	NormalDistribution = 'NormalDistribution',
	NumberRange = 'NumberRange',
	PAN = 'PAN',
	PIN = 'PIN',
	Phone = 'Phone',
	PostalZip = 'PostalZip',
	Region = 'Region',
	Rut = 'Rut',
	StreetAddress = 'StreetAddress',
	TextFixed = 'TextFixed',
	TextRandom = 'TextRandom',
	Time = 'Time',
	Track1 = 'Track1',
	Track2 = 'Track2',
	URLs = 'URLs',
	WeightedList = 'WeightedList'
}

import { GenerationOptionsType as AlphanumericGenerationOptions } from './src/plugins/dataTypes/Alphanumeric/Alphanumeric.state';
import { GenerationOptionsType as AutoIncrementGenerationOptions } from './src/plugins/dataTypes/AutoIncrement/AutoIncrement.state';
import { GenerationOptionsType as BooleanGenerationOptions } from './src/plugins/dataTypes/Boolean/Boolean.state';
import { GenerationOptionsType as CVVGenerationOptions } from './src/plugins/dataTypes/CVV/CVV.state';
import { GenerationOptionsType as CityGenerationOptions } from './src/plugins/dataTypes/City/City.state';
import { GenerationOptionsType as ColourGenerationOptions } from './src/plugins/dataTypes/Colour/Colour.state';
import { GenerationOptionsType as CompanyGenerationOptions } from './src/plugins/dataTypes/Company/Company.state';
import { GenerationOptionsType as ComputedGenerationOptions } from './src/plugins/dataTypes/Computed/Computed.state';
import { GenerationOptionsType as ConstantGenerationOptions } from './src/plugins/dataTypes/Constant/Constant.state';
import { GenerationOptionsType as CountryGenerationOptions } from './src/plugins/dataTypes/Country/Country.state';
import { GenerationOptionsType as CurrencyGenerationOptions } from './src/plugins/dataTypes/Currency/Currency.state';
import { GenerationOptionsType as DateGenerationOptions } from './src/plugins/dataTypes/Date/Date.state';
import { GenerationOptionsType as EmailGenerationOptions } from './src/plugins/dataTypes/Email/Email.state';
import { GenerationOptionsType as GUIDGenerationOptions } from './src/plugins/dataTypes/GUID/GUID.state';
import { GenerationOptionsType as IBANGenerationOptions } from './src/plugins/dataTypes/IBAN/IBAN.state';
import { GenerationOptionsType as LatLngGenerationOptions } from './src/plugins/dataTypes/LatLng/LatLng.state';
import { GenerationOptionsType as ListGenerationOptions } from './src/plugins/dataTypes/List/List.state';
import { GenerationOptionsType as NamesGenerationOptions } from './src/plugins/dataTypes/Names/Names.state';
import { GenerationOptionsType as NormalDistributionGenerationOptions } from './src/plugins/dataTypes/NormalDistribution/NormalDistribution.state';
import { GenerationOptionsType as NumberRangeGenerationOptions } from './src/plugins/dataTypes/NumberRange/NumberRange.state';
import { GenerationOptionsType as PANGenerationOptions } from './src/plugins/dataTypes/PAN/PAN.state';
import { GenerationOptionsType as PINGenerationOptions } from './src/plugins/dataTypes/PIN/PIN.state';
import { GenerationOptionsType as PhoneGenerationOptions } from './src/plugins/dataTypes/Phone/Phone.state';
import { GenerationOptionsType as PostalZipGenerationOptions } from './src/plugins/dataTypes/PostalZip/PostalZip.state';
import { GenerationOptionsType as RegionGenerationOptions } from './src/plugins/dataTypes/Region/Region.state';
import { GenerationOptionsType as RutGenerationOptions } from './src/plugins/dataTypes/Rut/Rut.state';
import { GenerationOptionsType as StreetAddressGenerationOptions } from './src/plugins/dataTypes/StreetAddress/StreetAddress.state';
import { GenerationOptionsType as TextFixedGenerationOptions } from './src/plugins/dataTypes/TextFixed/TextFixed.state';
import { GenerationOptionsType as TextRandomGenerationOptions } from './src/plugins/dataTypes/TextRandom/TextRandom.state';
import { GenerationOptionsType as TimeGenerationOptions } from './src/plugins/dataTypes/Time/Time.state';
import { GenerationOptionsType as Track1GenerationOptions } from './src/plugins/dataTypes/Track1/Track1.state';
import { GenerationOptionsType as Track2GenerationOptions } from './src/plugins/dataTypes/Track2/Track2.state';
import { GenerationOptionsType as URLsGenerationOptions } from './src/plugins/dataTypes/URLs/URLs.state';
import { GenerationOptionsType as WeightedListGenerationOptions } from './src/plugins/dataTypes/WeightedList/WeightedList.state';
interface AlphanumericDataTypeRow {
	plugin: DataType.Alphanumeric | 'Alphanumeric';
	title: string;
	settings: AlphanumericGenerationOptions;
	id?: string;
}
interface AutoIncrementDataTypeRow {
	plugin: DataType.AutoIncrement | 'AutoIncrement';
	title: string;
	settings: AutoIncrementGenerationOptions;
	id?: string;
}
interface BooleanDataTypeRow {
	plugin: DataType.Boolean | 'Boolean';
	title: string;
	settings: BooleanGenerationOptions;
	id?: string;
}
interface CVVDataTypeRow {
	plugin: DataType.CVV | 'CVV';
	title: string;
	settings: CVVGenerationOptions;
	id?: string;
}
interface CityDataTypeRow {
	plugin: DataType.City | 'City';
	title: string;
	settings: CityGenerationOptions;
	id?: string;
}
interface ColourDataTypeRow {
	plugin: DataType.Colour | 'Colour';
	title: string;
	settings: ColourGenerationOptions;
	id?: string;
}
interface CompanyDataTypeRow {
	plugin: DataType.Company | 'Company';
	title: string;
	settings: CompanyGenerationOptions;
	id?: string;
}
interface ComputedDataTypeRow {
	plugin: DataType.Computed | 'Computed';
	title: string;
	settings: ComputedGenerationOptions;
	id?: string;
}
interface ConstantDataTypeRow {
	plugin: DataType.Constant | 'Constant';
	title: string;
	settings: ConstantGenerationOptions;
	id?: string;
}
interface CountryDataTypeRow {
	plugin: DataType.Country | 'Country';
	title: string;
	settings: CountryGenerationOptions;
	id?: string;
}
interface CurrencyDataTypeRow {
	plugin: DataType.Currency | 'Currency';
	title: string;
	settings: CurrencyGenerationOptions;
	id?: string;
}
interface DateDataTypeRow {
	plugin: DataType.Date | 'Date';
	title: string;
	settings: DateGenerationOptions;
	id?: string;
}
interface EmailDataTypeRow {
	plugin: DataType.Email | 'Email';
	title: string;
	settings: EmailGenerationOptions;
	id?: string;
}
interface GUIDDataTypeRow {
	plugin: DataType.GUID | 'GUID';
	title: string;
	settings: GUIDGenerationOptions;
	id?: string;
}
interface IBANDataTypeRow {
	plugin: DataType.IBAN | 'IBAN';
	title: string;
	settings: IBANGenerationOptions;
	id?: string;
}
interface LatLngDataTypeRow {
	plugin: DataType.LatLng | 'LatLng';
	title: string;
	settings: LatLngGenerationOptions;
	id?: string;
}
interface ListDataTypeRow {
	plugin: DataType.List | 'List';
	title: string;
	settings: ListGenerationOptions;
	id?: string;
}
interface NamesDataTypeRow {
	plugin: DataType.Names | 'Names';
	title: string;
	settings: NamesGenerationOptions;
	id?: string;
}
interface NormalDistributionDataTypeRow {
	plugin: DataType.NormalDistribution | 'NormalDistribution';
	title: string;
	settings: NormalDistributionGenerationOptions;
	id?: string;
}
interface NumberRangeDataTypeRow {
	plugin: DataType.NumberRange | 'NumberRange';
	title: string;
	settings: NumberRangeGenerationOptions;
	id?: string;
}
interface PANDataTypeRow {
	plugin: DataType.PAN | 'PAN';
	title: string;
	settings: PANGenerationOptions;
	id?: string;
}
interface PINDataTypeRow {
	plugin: DataType.PIN | 'PIN';
	title: string;
	settings: PINGenerationOptions;
	id?: string;
}
interface PhoneDataTypeRow {
	plugin: DataType.Phone | 'Phone';
	title: string;
	settings: PhoneGenerationOptions;
	id?: string;
}
interface PostalZipDataTypeRow {
	plugin: DataType.PostalZip | 'PostalZip';
	title: string;
	settings: PostalZipGenerationOptions;
	id?: string;
}
interface RegionDataTypeRow {
	plugin: DataType.Region | 'Region';
	title: string;
	settings: RegionGenerationOptions;
	id?: string;
}
interface RutDataTypeRow {
	plugin: DataType.Rut | 'Rut';
	title: string;
	settings: RutGenerationOptions;
	id?: string;
}
interface StreetAddressDataTypeRow {
	plugin: DataType.StreetAddress | 'StreetAddress';
	title: string;
	settings: StreetAddressGenerationOptions;
	id?: string;
}
interface TextFixedDataTypeRow {
	plugin: DataType.TextFixed | 'TextFixed';
	title: string;
	settings: TextFixedGenerationOptions;
	id?: string;
}
interface TextRandomDataTypeRow {
	plugin: DataType.TextRandom | 'TextRandom';
	title: string;
	settings: TextRandomGenerationOptions;
	id?: string;
}
interface TimeDataTypeRow {
	plugin: DataType.Time | 'Time';
	title: string;
	settings: TimeGenerationOptions;
	id?: string;
}
interface Track1DataTypeRow {
	plugin: DataType.Track1 | 'Track1';
	title: string;
	settings: Track1GenerationOptions;
	id?: string;
}
interface Track2DataTypeRow {
	plugin: DataType.Track2 | 'Track2';
	title: string;
	settings: Track2GenerationOptions;
	id?: string;
}
interface URLsDataTypeRow {
	plugin: DataType.URLs | 'URLs';
	title: string;
	settings: URLsGenerationOptions;
	id?: string;
}
interface WeightedListDataTypeRow {
	plugin: DataType.WeightedList | 'WeightedList';
	title: string;
	settings: WeightedListGenerationOptions;
	id?: string;
}

export type DataTemplateRow = AlphanumericDataTypeRow | AutoIncrementDataTypeRow | BooleanDataTypeRow | CVVDataTypeRow | CityDataTypeRow | ColourDataTypeRow | CompanyDataTypeRow | ComputedDataTypeRow | ConstantDataTypeRow | CountryDataTypeRow | CurrencyDataTypeRow | DateDataTypeRow | EmailDataTypeRow | GUIDDataTypeRow | IBANDataTypeRow | LatLngDataTypeRow | ListDataTypeRow | NamesDataTypeRow | NormalDistributionDataTypeRow | NumberRangeDataTypeRow | PANDataTypeRow | PINDataTypeRow | PhoneDataTypeRow | PostalZipDataTypeRow | RegionDataTypeRow | RutDataTypeRow | StreetAddressDataTypeRow | TextFixedDataTypeRow | TextRandomDataTypeRow | TimeDataTypeRow | Track1DataTypeRow | Track2DataTypeRow | URLsDataTypeRow | WeightedListDataTypeRow;

import { GenerationOptionsType as CSVGenerationOptions } from './src/plugins/exportTypes/CSV/CSV.state';
import { GenerationOptionsType as CSharpGenerationOptions } from './src/plugins/exportTypes/CSharp/CSharp.state';
import { GenerationOptionsType as HTMLGenerationOptions } from './src/plugins/exportTypes/HTML/HTML.state';
import { GenerationOptionsType as JSONGenerationOptions } from './src/plugins/exportTypes/JSON/JSON.state';
import { GenerationOptionsType as JavascriptGenerationOptions } from './src/plugins/exportTypes/Javascript/Javascript.state';
import { GenerationOptionsType as LDIFGenerationOptions } from './src/plugins/exportTypes/LDIF/LDIF.state';
import { GenerationOptionsType as PHPGenerationOptions } from './src/plugins/exportTypes/PHP/PHP.state';
import { GenerationOptionsType as PerlGenerationOptions } from './src/plugins/exportTypes/Perl/Perl.state';
import { GenerationOptionsType as PythonGenerationOptions } from './src/plugins/exportTypes/Python/Python.state';
import { GenerationOptionsType as RubyGenerationOptions } from './src/plugins/exportTypes/Ruby/Ruby.state';
import { GenerationOptionsType as SQLGenerationOptions } from './src/plugins/exportTypes/SQL/SQL.state';
import { GenerationOptionsType as TypescriptGenerationOptions } from './src/plugins/exportTypes/Typescript/Typescript.state';
import { GenerationOptionsType as XMLGenerationOptions } from './src/plugins/exportTypes/XML/XML.state';
interface CSVExportTypeConfig {
	plugin: ExportType.CSV | 'CSV';
	settings: CSVGenerationOptions;
}
interface CSharpExportTypeConfig {
	plugin: ExportType.CSharp | 'CSharp';
	settings: CSharpGenerationOptions;
}
interface HTMLExportTypeConfig {
	plugin: ExportType.HTML | 'HTML';
	settings: HTMLGenerationOptions;
}
interface JSONExportTypeConfig {
	plugin: ExportType.JSON | 'JSON';
	settings: JSONGenerationOptions;
}
interface JavascriptExportTypeConfig {
	plugin: ExportType.Javascript | 'Javascript';
	settings: JavascriptGenerationOptions;
}
interface LDIFExportTypeConfig {
	plugin: ExportType.LDIF | 'LDIF';
	settings: LDIFGenerationOptions;
}
interface PHPExportTypeConfig {
	plugin: ExportType.PHP | 'PHP';
	settings: PHPGenerationOptions;
}
interface PerlExportTypeConfig {
	plugin: ExportType.Perl | 'Perl';
	settings: PerlGenerationOptions;
}
interface PythonExportTypeConfig {
	plugin: ExportType.Python | 'Python';
	settings: PythonGenerationOptions;
}
interface RubyExportTypeConfig {
	plugin: ExportType.Ruby | 'Ruby';
	settings: RubyGenerationOptions;
}
interface SQLExportTypeConfig {
	plugin: ExportType.SQL | 'SQL';
	settings: SQLGenerationOptions;
}
interface TypescriptExportTypeConfig {
	plugin: ExportType.Typescript | 'Typescript';
	settings: TypescriptGenerationOptions;
}
interface XMLExportTypeConfig {
	plugin: ExportType.XML | 'XML';
	settings: XMLGenerationOptions;
}

export type ExportTypeConfig = CSVExportTypeConfig | CSharpExportTypeConfig | HTMLExportTypeConfig | JSONExportTypeConfig | JavascriptExportTypeConfig | LDIFExportTypeConfig | PHPExportTypeConfig | PerlExportTypeConfig | PythonExportTypeConfig | RubyExportTypeConfig | SQLExportTypeConfig | TypescriptExportTypeConfig | XMLExportTypeConfig;

export enum ExportType {
	CSV = 'CSV',
	CSharp = 'CSharp',
	HTML = 'HTML',
	JSON = 'JSON',
	Javascript = 'Javascript',
	LDIF = 'LDIF',
	PHP = 'PHP',
	Perl = 'Perl',
	Python = 'Python',
	Ruby = 'Ruby',
	SQL = 'SQL',
	Typescript = 'Typescript',
	XML = 'XML'
}

