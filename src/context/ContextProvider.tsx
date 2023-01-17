import * as React from 'react'
import { ThemeProvider } from 'styled-components';

export const Context = React.createContext([]);

type Props = {
    children: JSX.Element[]
}

type Action = {
    type: string,
    payload?: any
}

export type State = {
    languageMode: string,
    colorMode: string
}

const reducer = (state: State, action: Action): State => {
    const { type, payload } = action;

    switch (type) {
        case 'CHANGE_LANGUAGE_MODE':
            return {
                ...state, 
                languageMode: payload
            }
        case 'CHANGE_COLOR_MODE': 
            state.colorMode == 'light' ? localStorage.setItem('dark-mode', 'true') : localStorage.setItem('dark-mode', 'false')
            return {
                ...state,
                colorMode: state.colorMode == 'light' ? 'dark' : 'light'
            }
        default: 
            return state;
    }
}

const themes = {
    light: {
        primary: '#6610F2',
        light: '#F5F5F5',
        black: '#222222',
        white: '#fff',
        tile: '#fff',
        dark: false
    },
    dark: { 
        light: '#222222',
        black: '#F5F5F5',
        primary: '#6610F2',
        white: '#191919',
        tile: "#222",
        dark: true
    }
}

const ContextProvider = ({children}: Props): JSX.Element => {
    const [ state, dispatch ] = React.useReducer(reducer, {
        languageMode: 'pl',
        colorMode: 'light'
    })

    React.useLayoutEffect(() => {
        const hours = (new Date()).getHours();

        if ((((hours >= 18 && hours < 24) || (hours >= 0 && hours <= 7)) && localStorage.getItem('dark-mode') == 'true') || localStorage.getItem('dark-mode') == 'true') {
            dispatch({type: 'CHANGE_COLOR_MODE'})
        }
    }, [])

    return (
        <Context.Provider value={{ state, dispatch }}>
            <ThemeProvider theme={state.colorMode === 'light' ? themes.light : themes.dark}>
                {children}
            </ThemeProvider>
        </Context.Provider>
    );
}

export default ContextProvider