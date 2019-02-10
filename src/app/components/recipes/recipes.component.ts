import { Component, OnInit } from '@angular/core';
import { RecipesRepository } from '../../repositories/recipes.repository';

@Component({
	selector: 'recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

	public recipes: any[];

	constructor(private recipesRepository: RecipesRepository) {

	}

	async ngOnInit() {
		this.recipes = await this.recipesRepository.getRecipes();
	}

}
