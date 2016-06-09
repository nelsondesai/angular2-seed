import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'vote',
    templateUrl: 'app/vote.template.html',	
	styles: [`
		.glyphicon-heart{
			color:#CCC;
			cursor:pointer;
		}
		.highlighted
		{
			color: deeppink;
		}
		.vDiv
		{
			width:20px;
			text-align:center;
			color#999;
		}
		.vote-button
		{
			cursor:pointer;
		}
		.vote-count
		{
			font-size:14px;
		}
	`]
})
export class VoteComponent{
    title = "The name of binding"; 
	@Input() myVote = 0;
	@Input() totalVote = 0;
	@Output() vote = new EventEmitter();
	upVote()
	{
		if(this.myVote == 1)
			return;
		this.myVote++;		
		this.vote.emit({myVote:this.myVote});
	}
	downVote()
	{
		if(this.myVote == -1)
			return;
		this.myVote--;		
		this.vote.emit({myVote:this.myVote});
	}
}