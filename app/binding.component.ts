import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'binding',
    templateUrl: 'app/binding.template.html',	
	styles: [`
		.glyphicon-star{
			color:orange;
		}
	`]
})
export class BindingComponent{
    title = "The name of binding"; 
	@Input('is-favorite') isFavorite = false;
	@Output() change = new EventEmitter();
	onClick()
	{
		this.isFavorite = !this.isFavorite;
		this.change.emit({newValue:this.isFavorite});
	}
}