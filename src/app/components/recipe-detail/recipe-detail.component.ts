import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesRepository } from 'src/app/repositories/recipes.repository';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
	public recipe: Recipe;
	public recipeLoaded: boolean;
	public paramsSubscription: any;

	constructor(
		private recipesRepository: RecipesRepository,
		private route: ActivatedRoute
	) {
		this.recipeLoaded = false;
	}

	ngOnInit() {
		this.paramsSubscription = this.route.params.subscribe(async params => {
			this.recipe = await this.recipesRepository.getRecipe(params['id']);
			this.recipeLoaded = true;
		});
	}

	ngOnDestroy() {
		this.paramsSubscription.unsubscribe();
	}

}
