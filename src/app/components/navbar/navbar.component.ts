import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RecipeModalService } from '../recipe-modal/recipe-modal.service';

@Component({
	selector: 'navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	@ViewChild('navbarBurger') burger: ElementRef;
	@ViewChild('navbarMenu') menu: ElementRef;

	constructor(private recipeModalService: RecipeModalService) { }

	ngOnInit() { }

	public openRecipeModal() {
		this.recipeModalService.openModal();
	}

	public toggleMenu() {
		this.burger.nativeElement.classList.toggle("is-active");
		this.menu.nativeElement.classList.toggle("is-active");
	}
}
