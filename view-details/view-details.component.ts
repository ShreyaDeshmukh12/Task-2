import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { News } from '../news';
import { NewsOperationsService } from '../news-operations.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent {

  __newsService:NewsOperationsService; 
  router:Router;
  activeRoute:ActivatedRoute;
   n:News = new News('','','','');
    constructor(newsService:NewsOperationsService,router:Router,activeRoute:ActivatedRoute)
  {
    this.__newsService = newsService;
    this.router = router;
    this.activeRoute = activeRoute;

    let searchCategory= this.activeRoute.snapshot.params['category']; 
    console.log(searchCategory);
    this.n= this.__newsService.getNewsByCategories(searchCategory); 
    console.log(this.n);
  }


}
