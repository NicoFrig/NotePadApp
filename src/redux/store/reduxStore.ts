import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {configureStore} from '@reduxjs/toolkit';
import rootSaga from './rootSaga';
import {noteSlice} from '../slices/note/note.slice';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];

export const reduxStore = configureStore({
    reducer: {
        notes: noteSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(middlewares),
});

sagaMiddleware.run(rootSaga);

export type ReduxState = ReturnType<typeof reduxStore.getState>;

export type AppDispatch = typeof reduxStore.dispatch;
