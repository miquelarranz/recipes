import { Component, OnInit, Input } from '@angular/core';
import { RecipeModalService } from './recipe-modal.service';

@Component({
	selector: 'recipe-modal',
	templateUrl: './recipe-modal.component.html',
	styleUrls: ['./recipe-modal.component.scss']
})
export class RecipeModalComponent implements OnInit {
	public showModal: boolean;

	constructor(private recipeModalService: RecipeModalService) {
		this.showModal = false;
	}

	ngOnInit() {
		this.recipeModalService.showModal.subscribe((showModal: boolean) => {
			this.showModal = showModal;
		});
	}

	closeModal() {
		this.recipeModalService.closeModal();
	}
}
