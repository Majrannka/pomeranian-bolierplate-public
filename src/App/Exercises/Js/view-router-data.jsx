import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as Numbers } from './Numbers/router-data';
import { blockRouterMetaData as NumbersBooleanExercise } from './NumbersBooleanExercise/router-data';
import { blockRouterMetaData as EmptyValuesComments } from './EmptyValuesComments/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  Numbers,
  NumbersBooleanExercise,
  EmptyValuesComments,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
