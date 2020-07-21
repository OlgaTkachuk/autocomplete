import initialState from 'src/store/InitialStates';
import injectReducer from 'src/store/InjectReducer';

import {AUTH} from '../types';

export default injectReducer(initialState, {
    // Get Confirmation Code
    [AUTH.GET_CONFIRMATION_CODE]: state => ({
        ...state,
        codeSend: false,
        isRequest: true,
        errorsData: null,
    }),
    [AUTH.GET_CONFIRMATION_CODE_SUCCESS]: state => ({
        ...state,
        codeSend: true,
        isRequest: false,
    }),
    [AUTH.GET_CONFIRMATION_CODE_FAILURE]: state => ({
        ...state,
        codeSend: false,
        isRequest: false,
    }),
});
