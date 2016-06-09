import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {BindingComponent} from './binding.component'
import {LikeComponent} from './like.component'

@Component({
    selector: 'my-app',
    template: `<h1>Hey A2</h1><courses></courses><authors></authors>
	<i class="glyphicon glyphicon-star"></i>
	<binding [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></binding>
	<like [totalLikes]="post.totalLikes" [iLike]="post.iLike"></like>`,
    directives: [CoursesComponent, AuthorsComponent, BindingComponent, LikeComponent]
})
export class AppComponent {  
	post =
	{
		title: 'title',
		isFavorite: true,
		totalLikes: 10;
		iLike: true
	}
	onFavoriteChange($event)
	{
		console.log($event);
	}
}