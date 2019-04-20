import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { Category } from 'src/app/models/category.model';

@Component({
	selector: 'recipe',
	templateUrl: './recipe.component.html',
	styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

	@Input() recipe: Recipe;
	public categories: Category[];

	ngOnInit() {
		this.categories = this.prepareCategories(this.recipe.categories);
	}

	private prepareCategories(categories: string[]) {
		return categories.map((category) => {
			return new Category(category);
		})
	}
}
