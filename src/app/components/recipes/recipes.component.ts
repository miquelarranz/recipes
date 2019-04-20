import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipesRepository } from '../../repositories/recipes.repository';
import { Recipe } from '../../models/recipe.model';
import { RecipeModalService } from '../recipe-modal/recipe-modal.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit, OnDestroy {

	public recipes: Recipe[];
	public recipesLoaded: boolean;
	public showModalSubscription: Subscription;

	constructor(
		private recipesRepository: RecipesRepository,
		private recipeModalService: RecipeModalService
	) {
		this.recipesLoaded = false;
	}

	async ngOnInit() {
		this.recipes = await this.recipesRepository.getRecipes();
		this.recipesLoaded = true;

		this.showModalSubscription = this.recipeModalService.showModal.subscribe(async (showModal) => {
			if (showModal === false) {
				this.recipes = await this.recipesRepository.getRecipes();
			}
		})
	}

	ngOnDestroy() {
		this.showModalSubscription.unsubscribe();
	}

}
