import { GeneratorOutput } from '../../../../types';
import {
  createRoutesNamedLocationsExport,
  createRoutesNamedLocationsResolvedExport,
  createRoutesNamesListExport,
  createRoutesParamsRecordExport,
  createRoutesParamsRecordResolvedExport,
} from '../blocks';

export function createRoutesTypesFile({
  routesList,
  routesObjectTemplate,
  routesDeclTemplate,
  routesParams,
  routesPaths,
}: GeneratorOutput): string {
  return /* typescript */ `
    ${createRoutesNamesListExport(routesList)}

    ${createRoutesParamsRecordExport(routesParams)}
    
    ${createRoutesParamsRecordResolvedExport(routesParams)}

    ${createRoutesNamedLocationsExport(routesParams)}

    ${createRoutesNamedLocationsResolvedExport(routesParams)}

    export type RoutesNamesListRecord = ${routesDeclTemplate};

    export const routesNames = ${routesObjectTemplate};
  `;
}
