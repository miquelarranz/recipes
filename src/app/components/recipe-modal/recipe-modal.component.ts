import { Component, OnInit, Input } from '@angular/core';
import { RecipeModalService } from './recipe-modal.service';
import { RecipesRepository } from 'src/app/repositories/recipes.repository';

@Component({
	selector: 'recipe-modal',
	templateUrl: './recipe-modal.component.html',
	styleUrls: ['./recipe-modal.component.scss']
})
export class RecipeModalComponent implements OnInit {
	public showModal: boolean;

	constructor(
		private recipeModalService: RecipeModalService,
		private recipesRepository: RecipesRepository,
	) {
		this.showModal = false;
	}

	ngOnInit() {
		this.recipeModalService.showModal.subscribe((showModal: boolean) => {
			this.showModal = showModal;
		});
	}

	createRecipe() {
		// Get params
		// Create the recipe
		// await this.recipesRepository.createRecipe(recipe);
		// Update list
	}

	closeModal() {
		this.recipeModalService.closeModal();
	}
}
