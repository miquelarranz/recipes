import { Component, OnInit, Input } from '@angular/core';
import { RecipeModalService } from './recipe-modal.service';
import { RecipesRepository } from 'src/app/repositories/recipes.repository';
import { FormBuilder, Validators } from '@angular/forms';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
	selector: 'recipe-modal',
	templateUrl: './recipe-modal.component.html',
	styleUrls: ['./recipe-modal.component.scss']
})
export class RecipeModalComponent implements OnInit {
	public showModal: boolean;
	public recipeForm: any;
	private STEPS_SEPARATOR = '-';
	private INGREDIENTS_SEPARATOR = '-';
	private CATEGORIES_SEPARATOR = ',';

	constructor(
		private recipeModalService: RecipeModalService,
		private recipesRepository: RecipesRepository,
		private formBuilder: FormBuilder
	) {
		this.showModal = false;
		this.recipeForm = this.formBuilder.group({
			name: ['', Validators.required],
			ingredients: ['', Validators.required],
			steps: ['', Validators.required],
			categories: ['']
		});
	}

	ngOnInit() {
		this.recipeModalService.showModal.subscribe((showModal: boolean) => {
			this.showModal = showModal;
		});
	}

	async createRecipe() {
		const formData = this.recipeForm.value;
		const recipe = new Recipe(
			null,
			formData.name,
			this.parseToList(formData.ingredients, this.INGREDIENTS_SEPARATOR).slice(1),
			this.parseToList(formData.steps, this.STEPS_SEPARATOR).slice(1),
			this.parseToList(formData.categories, this.CATEGORIES_SEPARATOR)
		)

		await this.recipesRepository.createRecipe(recipe);
		// Update list
		this.closeModal();
	}

	closeModal() {
		this.recipeModalService.closeModal();
	}

	private parseToList(string: string, separator: string): string[] {
		return string.split(separator).map(element => element.trim());
	}
}
