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

	}
}
