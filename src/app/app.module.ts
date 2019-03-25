import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { RecipeModalComponent } from './components/recipe-modal/recipe-modal.component';

@NgModule({
	declarations: [
		AppComponent,
		RecipesComponent,
		RecipeComponent,
		NavbarComponent,
		RecipeDetailComponent,
		RecipeModalComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
