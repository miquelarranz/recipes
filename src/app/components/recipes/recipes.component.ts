import { Component, OnInit } from '@angular/core';
import { RecipesRepository } from '../../repositories/recipes.repository';
import { Recipe } from '../../models/recipe.model';

@Component({
	selector: 'recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

	public recipes: Recipe[];
	public recipesLoaded: boolean;

	constructor(private recipesRepository: RecipesRepository) {
		this.recipesLoaded = false;
	}

	async ngOnInit() {
		this.recipes = await this.recipesRepository.getRecipes();
		this.recipesLoaded = true;
	}

}
