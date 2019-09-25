import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
import { alertController } from '@ionic/core';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }

  ionViewwDidLeave(){
    console.log('ionViewDidLeave');
  }
  
  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

}
