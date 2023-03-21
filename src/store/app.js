import {create} from 'zustand';
import {nanoid} from 'nanoid';
import {createTheme} from '@mui/material/styles';
import Audimat3000 from '../assets/fonts/Audimat3000-Regulier.woff2';
import SohneBuch from '../assets/fonts/Sohne-Buch.woff2';
import SohneKraftig from '../assets/fonts/Sohne-Kraftig.woff2';

const themeDefinition = {
	palette: {
		mode: 'dark',
		primary: {
			main: '#405BFF',
		},
		secondary: {
			main: '#EBFF38',
		},
		neutral: {
			main: '#64748B',
		},
	},
	typography: {
		h2: {
			fontFamily: 'Audimat',
		},
		h5: {
			fontFamily: 'Kraftig',
		},
		h6: {
			fontFamily: 'Kraftig',
			fontWeight: 'bold',
			fontSize: '24px',
		},
		body1: {
			fontFamily: 'Buch',
			color: '#e6e6e6',
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
				@font-face {
					font-family: "Audimat";
					src: url(${Audimat3000}) format('woff2');
					font-weight: bold;
				}

				@font-face {
					font-family: 'Kraftig';
					src: url(${SohneKraftig}) format('woff2');
				}

				@font-face {
					font-family: 'Buch';
					src: local('Buch'), url(${SohneBuch}) format('woff2');
					font-weight: normal;
				}
			`,
		},
	},
};

const darkTheme = createTheme(themeDefinition);

const lightTheme = createTheme({
	...themeDefinition,
	palette: {
		mode: 'light',
		primary: {
			main: '#405BFF',
		},
		secondary: {
			main: '#EBFF38',
		},
		neutral: {
			main: '#64748B',
		},
	},
	typography: {
		h2: {
			fontFamily: 'Audimat',
		},
		h5: {
			fontFamily: 'Kraftig',
		},
		h6: {
			fontFamily: 'Kraftig',
			fontWeight: 'bold',
			fontSize: '24px',
		},
		body1: {
			fontFamily: 'Buch',
		},
	},
});

const starterTodos = [
	{
		title: 'Create a Vue ToDo Application',
		description: 'We need a new Vue application to keep track of ToDos',
		isComplete: true,
		ordinalNumber: 0,
		id: nanoid(),
	},
	{
		title: 'Capture browser info',
		description:
			'To support debugging and advanced targeting, we need to be able to capture browser info',
		isComplete: true,
		ordinalNumber: 2,
		id: nanoid(),
	},
	{
		title: 'Create a base list of ToDos',
		description: 'Our project roadmap should be in our ToDo list',
		isComplete: true,
		ordinalNumber: 1,
		id: nanoid(),
	},
	{
		title: 'Provide the ability to Login',
		description:
			'To support delivering features to specific users, we need them to be able to login',
		isComplete: true,
		ordinalNumber: 3,
		id: nanoid(),
	},
	{
		title: 'Support ToDo item creation',
		description: 'Users will need to be able to add their own ToDo list items',
		isComplete: true,
		ordinalNumber: 4,
		id: nanoid(),
	},
	{
		title: 'Support ToDo item deletion',
		description: 'Users may want to delete ToDo items at times',
		isComplete: true,
		ordinalNumber: 5,
		id: nanoid(),
	},
	{
		title: 'Validate input when creating a ToDo item',
		description:
			"To get meaningful data, we'll need some validation on user input",
		isComplete: false,
		ordinalNumber: 7,
		id: nanoid(),
	},
	{
		title: 'Support local storage of ToDo list',
		description:
			'Users want persistent ToDo lists and local storage could help support this',
		isComplete: false,
		ordinalNumber: 6,
		id: nanoid(),
	},
];

export const useAppStore = create((set, get) => ({
	user: null,
	login({username: _username}) {
		set({
			user: {
				username: _username,
			},
		});
	},
	logout() {
		set({user: null});
	},
	todos: [...starterTodos],
	addToDo(todo) {
		let index = 0;
		const todos = get().todos;
		if (todos && todos.length > 0) {
			const sortedToDos = todos.sort((todoA, todoB) => {
				if (todoA.ordinalNumber > todoB.ordinalNumber) {
					return 1;
				}

				if (todoA.ordinalNumber < todoB.ordinalNumber) {
					return -1;
				}

				return 0;
			});
			index = sortedToDos[sortedToDos.length - 1].ordinalNumber + 1;
			set({
				todos: [
					...sortedToDos,
					{
						...todo,
						id: nanoid(),
						isComplete: false,
						ordinalNumber: index,
					},
				],
			});
		} else {
			set({
				todos: [
					{
						...todo,
						id: nanoid(),
						isComplete: false,
						ordinalNumber: index,
					},
				],
			});
		}
	},
	removeToDo(id) {
		const updatedToDos = get().todos.filter((todo) => todo.id !== id);
		set({todos: [...updatedToDos]});
	},
	addBrowserInfo(browserInfo) {
		const {browser, engine, ua, os, device, cpu} = browserInfo;
		set({
			browser,
			engine,
			userAgent: ua,
			operatingSystem: os,
			device,
			cpu,
		});
	},
	browser: null,
	engine: null,
	operatingSystem: null,
	device: null,
	cpu: null,
	userAgent: null,
	debugAllowList: [],
	updateAllowList(_allowList) {
		set({debugAllowList: _allowList});
	},
	theme: darkTheme,
	themeName: 'dark',
	allState() {
		const state = get();
		const stateEntries = Object.entries(state);
		const debugAllowList = get().debugAllowList;
		const entries = stateEntries
			.filter((entry) => {
				const [key, value] = entry;
				return (
					debugAllowList.includes(key) &&
					typeof value !== 'function' &&
					key.match(/^[a-z\d]/i) &&
					!key.startsWith('allState')
				);
			})
			.map((entry) => {
				const [key, value] = entry;
				return {
					key,
					value,
				};
			});
		return entries;
	},
	toggleTheme() {
		set(() => {
			const currentTheme = get().themeName;

			if (currentTheme === 'dark') {
				return {
					theme: lightTheme,
					themeName: 'light',
				};
			}

			return {
				theme: darkTheme,
				themeName: 'dark',
			};
		});
	},
	toggleToDoComplete(id) {
		const todos = get().todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					isComplete: !todo.isComplete,
				};
			}

			return todo;
		});
		set({todos});
	},
}));
