import { Injectable } from '@angular/core';
import * as uuid from 'uuid/v4';
import { Recipe } from '../models/recipe.model';
import { recipes } from './recipe.fixture';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

class Alligator {
	public name: string;

}

@Injectable({
	providedIn: 'root',
})
export class RecipesRepository {
	private COLLECTION = 'recipes'
	constructor(private firebase: AngularFirestore) { }

	public getRecipe(id: string): Promise<Recipe> {
		return new Promise<Recipe>((resolve, reject) => {
			this.firebase.collection(
				this.COLLECTION, ref => ref.where('id', '==', id)
			).valueChanges().subscribe(recipes => {
				const recipe = recipes[0];
				resolve(
					new Recipe(
						recipe['id'],
						recipe['name'],
						recipe['ingredients'],
						recipe['steps'],
						recipe['categories'],
					)
				);
			});
		});
	}

	public getRecipes(): Promise<Recipe[]> {
		return new Promise<Recipe[]>((resolve, reject) => {
			this.firebase.collection(this.COLLECTION).valueChanges().subscribe(recipes => {
				resolve(
					recipes.map(recipe => {
						return new Recipe(
							recipe['id'],
							recipe['name'],
							recipe['ingredients'],
							recipe['steps'],
							recipe['categories'],
						);
					})
				);
			})
		})
	}
}
