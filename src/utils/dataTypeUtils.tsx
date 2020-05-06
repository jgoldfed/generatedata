import React from 'react';
import { coreConfig } from '../core';
import { getStrings } from './langUtils';
import { dataTypes, DataTypeFolder } from '../_plugins';
import { DTBundle, DTHelpProps } from '../../types/dataTypes';
import { SmallSpinner, MediumSpinner } from '../components/loaders';

type LoadedDataTypes = {
	[name in DataTypeFolder]: DTBundle;
}

// this houses all Export Type code loaded async after the application starts
const loadedDataTypes: Partial<LoadedDataTypes> = {};

export const dataTypeNames = Object.keys(dataTypes).map((folder: DataTypeFolder) => dataTypes[folder].name);

// used for the Data Type selection dropdown
export const getSortedGroupedDataTypes = (): any => {
	const i18n = getStrings();

	return coreConfig.dataTypeGroups.map((group: string) => {
		const options = Object.keys(dataTypes)
			.filter((dataType: DataTypeFolder) => dataTypes[dataType].fieldGroup === group)
			.map((dataType: DataTypeFolder) => ({
				dataType,
				sortOrder: dataTypes[dataType].fieldGroupOrder
			}));

		options.sort((a: any, b: any) => {
			if (a.sortOrder < b.sortOrder) {
				return -1;
			} else if (a.sortOrder > b.sortOrder) {
				return 1;
			}
			return 0;
		});

		const sortedOptions = options.map(({ dataType }: { dataType: DataTypeFolder }) => ({
			value: dataType,
			label: dataTypes[dataType].name
		}));

		return {
			label: i18n.core[group],
			options: sortedOptions
		};
	});
};

export const DefaultHelpComponent = ({ i18n }: DTHelpProps): JSX.Element => <p dangerouslySetInnerHTML={{ __html: i18n.DESC }} />;

// our main getter function to return everything known about a Data Type
export const getDataType = (dataType: DataTypeFolder | null): any => {
	// TODO standardize these. All should either return null or a component
	let Example = null;
	let Options = null;
	let Help: any = (): null => null;

	if (!dataType || !loadedDataTypes[dataType]) {
		return {
			name: dataType ? dataTypes[dataType].name : '',
			Example: SmallSpinner,
			Options,
			Help: MediumSpinner
		};
	}

	if (loadedDataTypes[dataType]!.Example) {
		Example = loadedDataTypes[dataType]!.Example;
	}

	if (loadedDataTypes[dataType]!.Options) {
		Options = loadedDataTypes[dataType]!.Options;
	}

	if (dataType && loadedDataTypes[dataType]!.Help) {
		Help = loadedDataTypes[dataType]!.Help;
	} else {
		Help = DefaultHelpComponent;
	}

	const { generate, getMetadata, rowStateReducer } = loadedDataTypes[dataType] as DTBundle;
	return {
		name: dataTypes[dataType].name,
		Options,
		Help,
		Example,
		generate,
		getMetadata,
		rowStateReducer
	};
};


type DataTypeProcessOrders = {
	[name in DataTypeFolder]?: number;
}

export const processOrders: DataTypeProcessOrders = {};
Object.keys(dataTypes).map((dataType: DataTypeFolder) => {
	processOrders[dataType] = dataTypes[dataType].processOrder ? dataTypes[dataType].processOrder : 1;
});

type ProcessBatches = {
	[dt in DataTypeFolder]?: number;
};

export function RecursiveErrorException (remaining: string[]) {
	// @ts-ignore-line
	this.possibleProblematicDataTypes = remaining;
	// @ts-ignore-line
	this.name = 'Recursive dependency';
}

/**
 * Data Types can register dependencies on other Data Types, so that when the row data is generated, the script
 * ensures the dependencies are generated first and available for use by other Data Types. For example:
 *
 * Country <- Region <- City
 *
 * Here, the City DT expects the Region DT to be generated first, so it can generate a random city within whatever
 * random region was generated. Then the same goes for Region with Country.
 *
 * This method examines all the dependencies and creates a flat object of dataType => process batch. Any recursive
 * dependencies throw an error.
 */
export const getProcessBatches = (dataTypes: any): ProcessBatches => {
	let dataTypesToProcess = Object.keys(dataTypes);

	const processBatches: ProcessBatches = {};
	let previousLength = dataTypesToProcess.length;
	let currentBatch = 1;

	while (dataTypesToProcess.length > 0) {
		const fulfilledDataTypes: any = [];
		dataTypesToProcess.forEach((dataType) => {
			// here, we're dealing with Data Types that have dependencies. Loop through them all and figure out if all
			// of them have already been assigned to a process batch
			const allDependenciesPositioned = !dataTypes[dataType].dependencies || dataTypes[dataType].dependencies.every((dependency: string) => !!processBatches[dependency as DataTypeFolder]);
			if (allDependenciesPositioned) {
				fulfilledDataTypes.push(dataType);
			}
		});

		if (fulfilledDataTypes.length) {
			fulfilledDataTypes.forEach((dataType: string) => {
				processBatches[dataType as DataTypeFolder] = currentBatch;
			});
			dataTypesToProcess = dataTypesToProcess.filter((dataType) => fulfilledDataTypes.indexOf(dataType) === -1);
			currentBatch++;
		}

		if (dataTypesToProcess.length === previousLength) {
			// @ts-ignore-line
			throw new RecursiveErrorException(dataTypesToProcess);
		}
	}
	return processBatches;
};


export const loadDataTypeBundle = (dataType: DataTypeFolder): any => {
	return new Promise((resolve, reject) => {
		import(
			/* webpackChunkName: "DT-[request]" */
			/* webpackMode: "lazy" */
			`../plugins/dataTypes/${dataType}/bundle`
		)
			.then((definition: any) => {
				loadedDataTypes[dataType] = definition.default;
				resolve(definition.default);
			})
			.catch((e) => {
				reject(e);
			});
	});
};
