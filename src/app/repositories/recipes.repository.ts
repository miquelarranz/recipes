import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class RecipesRepository {
	constructor() { }

	public getRecipe(id: string): Promise<Recipe> {
		return new Promise<Recipe>((resolve, reject) => {
			fetch(`${environment.recipesAPI}/recipes/${id}`)
				.then(function(response) {
					return response.json();
				})
				.then(recipe => {
					resolve(
						new Recipe(
							recipe['_id'],
							recipe['name'],
							recipe['ingredients'],
							recipe['steps'],
							recipe['categories'],
						)
					);
				})
				.catch(error => {
					reject(error);
				});
		});
	}

	public getRecipes(): Promise<Recipe[]> {
		return new Promise<Recipe[]>((resolve, reject) => {
			fetch(`${environment.recipesAPI}/recipes`)
				.then(function(response) {
					return response.json();
				})
				.then(recipes => {
					resolve(
						recipes.map(recipe => {
							return new Recipe(
								recipe['_id'],
								recipe['name'],
								recipe['ingredients'],
								recipe['steps'],
								recipe['categories'],
							);
						})
					);
				})
				.catch(error => {
					reject(error);
				});
		})
	}

	public createRecipe(recipe: Recipe): Promise<Recipe> {
		return new Promise<Recipe>((resolve, reject) => {
			fetch(`${environment.recipesAPI}/recipes`, {
				method: 'POST',
				body: JSON.stringify(recipe),
				headers: { 'Content-Type': 'application/json' }
			})
				.then(function(response) {
					return response.json();
				})
				.then(id => {
					recipe.id = id;

					resolve(recipe);
				})
				.catch(error => {
					reject(error);
				});
		})
	}

	public updateRecipe(recipe: Recipe): Promise<Recipe> {
		return new Promise<Recipe>((resolve, reject) => {
			fetch(`${environment.recipesAPI}/recipes/${recipe.id}`, {
				method: 'PUT',
				body: JSON.stringify(recipe),
				headers: { 'Content-Type': 'application/json' }
			})
				.then(function(response) {
					return response.json();
				})
				.then(() => {
					resolve(recipe);
				})
				.catch(error => {
					reject(error);
				});
		})
	}

	public deleteRecipe(id: string): Promise<Recipe> {
		return new Promise<Recipe>((resolve, reject) => {
			fetch(`${environment.recipesAPI}/recipes/${id}`, {
				method: 'DELETE'
			})
				.then(() => {
					resolve();
				})
				.catch(error => {
					reject(error);
				});
		});
	}
}
