import {create} from 'zustand';
import {nanoid} from 'nanoid';

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
      'To get meaningful data, we\'ll need some validation on user input',
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

export const useAppStore = create(set => ({
	user: null,
	login({username: _username}) {
		set(() => ({username: _username}));
	},
	logout() {
		set({user: null});
	},
	todos: [starterTodos],
}));
