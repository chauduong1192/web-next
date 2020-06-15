const path = require('path');

module.exports = function (plop) {
	const testPath = '__tests__';

	// adding a custom inquirer prompt type
	plop.addPrompt('directory', require('inquirer-directory'));

	// load some additional helpers from a module installed using npm
	plop.load('plop-pack-fancy-comments', {
		prefix: '',
		upperCaseHeaders: true,
		commentStart: '',
		commentEnd: ''
	});

	// Utiles
	const delayLog = msg => answers => new Promise((resolve) => {
		setTimeout(() => resolve(msg), 1000);
	});
	
	const validateFileName = value => {
		if(!value) {
			return 'File name is required';
		}
		if (!(/^[a-zA-Z_.-]*$/).test(value)) {
			return 'File name must only contain alphanumeric characters';
		}
		return true;
	}

	const promptsComponent = () => {
		const list = {
			type: 'list',
			name: 'componentType',
			message: 'Which the component you want to create ?',
			choices: ['single', 'many']
		};
		const input = {
			type: 'input',
			name: 'fileName',
			message: 'Enter a component name:',
			validate: validateFileName,
		};
		const directory = {
			type: 'directory',
			name: 'path',
			message: 'Where would you like to put this component?',
			basePath: plop.getPlopfilePath()
		};

		return [list, directory, input];
	};

	const promptsRedux = () => {
		const input = {
			type: 'input',
			name: 'fileName',
			message: 'Enter a redux name:',
			validate: validateFileName,
		};

		return [input];
	};

	// SET GENERATOR FOR COMPONENT
	plop.setGenerator('component', {
		description: 'Create awesome component folder with tsx, specs, index...',
		prompts: promptsComponent(),
		actions: ({ path, fileName, componentType }) => {
			let actions = ['.... Please wait a second ....'];
			const addDefault = {
				type: 'add',
				abortOnFail: true,
			};
			const defaultPath = `${path}/{{properCase fileName}}`;
			const defaulTesttPath = `${testPath}/${path}/{{properCase fileName}}`;
			const templatePath = 'templates/component';
			const templateTestPath = 'templates/component/test';

			if(componentType === 'single') {

				const singleAction = [
					{
						...addDefault,
						path: `${path}/{{properCase fileName}}.tsx`,
						templateFile: `${templatePath}/single.txt`,
					},
					{
						...addDefault,
						path: `${testPath}/${path}/{{properCase fileName}}.test.tsx`,
						templateFile: `${templatePath}/test.txt`,
					},
				]

				actions = [...actions, ...singleAction];
			}

			if(componentType === 'many') {
				const manyActions = [
					{
						...addDefault,
						path: `${defaultPath}/{{properCase fileName}}Container.tsx`,
						templateFile: `${templatePath}/container.txt`,
					},
					{
						...addDefault,
						path: `${defaultPath}/{{properCase fileName}}.tsx`,
						templateFile: `${templatePath}/single.txt`,
					},
					{
						...addDefault,
						path: `${defaultPath}/index.ts`,
						templateFile: `${templatePath}/index.txt`,
					},
					{
						...addDefault,
						path: `${defaulTesttPath}/{{properCase fileName}}.test.tsx`,
						templateFile: `${templateTestPath}/single.test.txt`,
					},
					{
						...addDefault,
						path: `${defaulTesttPath}/{{properCase fileName}}Container.test.tsx`,
						templateFile: `${templateTestPath}/singleContainer.test.txt`,
					},
				];

				actions = [...actions, ...manyActions];
			}

			return actions;
		},
	});

	// SET GENER/ATOR FOR REDUX
	plop.setGenerator('redux', {
		description: 'Create awesome redux folder with action, type, reducer, selector...',
		prompts: promptsRedux(),
		actions: ({ fileName }) => {
			let actions = ['.... Please wait a second ....'];
			const addDefault = {
				type: 'add',
				abortOnFail: true,
			};
			const destination = 'redux/{{camelCase fileName}}';
			const base = `templates/redux`;
			const destinationTest = `${testPath}/redux/{{camelCase fileName}}`;
			const baseTest = 'templates/redux/test';

			const reduxMap = ['actions', 'reducer', 'index', 'selectors', 'types'];
			
			const reduxAction = [
				...reduxMap.map(re => ({
					...addDefault,
					path: `${destination}/${re}.ts`,
					templateFile: `${base}/${re}.txt`,
				})),
				...reduxMap
				.filter(fi => !(/^(index|types)$/).test(fi))
				.map(re => ({
					...addDefault,
					path: `${destinationTest}/${re}.test.ts`,
					templateFile: `${baseTest}/${re}.test.txt`,
				})),
			];
			actions = [...actions, ...reduxAction];

			return actions;
		},
	});
};