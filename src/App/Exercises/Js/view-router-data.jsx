import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as Precedence } from './OperatorsPrecedence/router-data';
import { blockRouterMetaData as Numbers } from './Numbers/router-data';
import { blockRouterMetaData as NumbersBooleanExercise } from './NumbersBooleanExercise/router-data';
import { blockRouterMetaData as EmptyValuesComments } from './EmptyValuesComments/router-data';
import { blockRouterMetaData as String } from './String/router-data';
import { ArraysMetaData } from './JSArraysBasics/router-data';
import { ArraysExerciseRouterMetaData } from './JSArraysExercise/router-data';
import { StringAsArrayMetaData } from './JSStringsASArrays/router-data';
import { HoistingMetaData } from './Hoisting/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  Precedence,
  Numbers,
  NumbersBooleanExercise,
  EmptyValuesComments,
  String,
  ArraysMetaData,
  ArraysExerciseRouterMetaData,
  StringAsArrayMetaData,
  HoistingMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
