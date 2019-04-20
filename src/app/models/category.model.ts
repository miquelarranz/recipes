export class Category {
	public name: string;
	public color: string;

	public COLORS = [
		'#3F51B5',
		'#009688',
		'#FFEB3B',
		'#FF9800',
		'#795548',
		'#E91E63',
		'#F44336',
		'#8BC34A',
		'#CDDC39',
		'#FFC107'
	]

	constructor(
		name?: string,
	) {
		this.name = name;
		this.color = this.calculateColor(name);
	}

	private calculateColor(name: string) {
		return this.COLORS[name.length % this.COLORS.length];
	}
}
