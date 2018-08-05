import {action} from 'typesafe-actions';

import { DECREMENT,INCREMENT } from './actionTypes';

export const increment = () => action(INCREMENT);

export const decrement = () => action(DECREMENT);
