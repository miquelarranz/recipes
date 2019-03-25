import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class RecipeModalService {
	public showModal: Subject<boolean>

	constructor() {
		this.showModal = new Subject();
		this.showModal.next(false);
	}

	public closeModal() {
		this.showModal.next(false);
	}

	public openModal() {
		this.showModal.next(true);
	}
}
