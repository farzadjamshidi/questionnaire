# Questionnaire

Concepts:
  - Questionnaire
  - A	Questionnaire	has	a	title	and	a	description
  - A	questionnaire	has	a	defined	sequence	of	question	that	need	to	be	answered
  - Question
  - 3	different	types	of	questions	are	supported:	Freetext,	Multiple	choice	(single	answer),	Multiple	
  choice	(multi	answer)
  - For	Multiple	Choice,	each	choice	has	a	descriptive	label	that	is	shown	to	the	user

Requirements:
  - As	a	user	I	can	answers	questions	very	swiftly	so	that	I	don’t	feel	like	I	am	wasting	my	time
  - Your	questionnaire	is	based	on	a	JSON	that	the	frontend	uses	to	drive	the	questions
  - As	a	user	I	can	go	back	to	a	previous	question	without	losing	the	answers	I	have	given	in	a	current	
  question
  - Mobile	First,	use	some	SVG,	use	JS	ES	6-7	features,	good	conventions	for	CSS

Task:
  - Write	a	small	web	application	that	enables	a	user	to	answer	a	questionnaire
  - Use	the	given	questionnaire.json to	derive	the	definition	of	a	questionnaire
  - Use	a	modern	client	side	MVC	Framework	like	Ember	(highly	preferred),	GlimmerVM (bleeding	edge),	or	
  react	(although	we	prefer	ember	JS)

Goals/Priorities
  • Show	UX	skills,	use	CSS	and	possibly	animate	the	transition	between	questions	(high	priority)
  • At	least	1	component	test	(not	auto	generated)	(high	priority)
  • Clean	code	and	MVC	based	application	structure	(high	priority)
  • There	is	no	need	to	store	results	in	a	database
  • Bonus:	The	design	is	responsive

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
