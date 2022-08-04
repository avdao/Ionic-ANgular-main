import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',

    children: [
      {
        path: '',
        loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)


      },
     
      {
        path:':recipeID',
        loadChildren: () => import('./recipes/recipe-detail/recipe-detail.module').then( m => m.RecipeDetailPageModule),

      },



    ]
  },
  {
  path: 'product-add',
  children: [
    {
      path: '',
      loadChildren: () => import('./product-add/product-add.module').then( m => m.ProductAddPageModule)


    },
    {
      path: 'edit/:id',
  
      loadChildren: () => import('./product-add/product-add.module').then( m => m.ProductAddPageModule)
    },
    



  ]
 
},


 
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'category-detail/:id',
    loadChildren: () => import('./category-detail/category-detail.module').then( m => m.CategoryDetailPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
