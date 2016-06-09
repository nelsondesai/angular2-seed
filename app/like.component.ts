import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'like',
    templateUrl: 'app/like.template.html',	
	styles: [`
		.glyphicon-heart{
			color:#CCC;
			cursor:pointer;
		}
		.highlighted
		{
			color: deeppink;
		}
	`]
})
export class LikeComponent{
    title = "The name of binding"; 
	@Input() iLike = false;
	@Input() totalLikes = 0;
	onClick()
	{
		this.iLike = !this.iLike;
		this.totalLikes += this.iLike ? 1 : -1;
	}
}