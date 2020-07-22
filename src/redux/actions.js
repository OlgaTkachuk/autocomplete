import {createActions} from 'redux-actions';

import {GET_DATA} from './types';

export const {getData} = createActions({
    [GET_DATA]: (data) => ({data}),
});
