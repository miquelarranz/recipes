import { v4 } from 'uuid';

export class Recipe {
	public id: string;
	public name: string;
	public ingredients: string[];
	public steps: string[];
	public categories: string[];

	constructor(
		id?: string,
		name?: string,
		ingredients?: string[],
		steps?: string[],
		categories?: string[]
	) {
		this.id = (id) ? id : v4();
		this.name = name;
		this.ingredients = ingredients;
		this.steps = steps;
		this.categories = categories;
	}
}
