 import * as model from './model' ; 
 import recipeView from './views/recipeViews';
  import searchview from './views/searchview';
  import resultsview, { ResultsView } from './views/resultsview'; 

import 'core-js/stable';
import 'regenerator-runtime/runtime' ; 
import { async } from 'regenerator-runtime/runtime';



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

 


      //  RECIPE

          const controlRecipe = async function () {


              recipeView.renderSpinner();


                try {
    
                 const id = window.location.hash.slice(1);
                 console.log(id);
    
                 if(!id) return ;
    
    
    
    
             //1 LOading The REcipe

              await model.loadRecipe(id);
               const {recipe} = model.state;

             // 2 REndering Recipe
              recipeView.render(model.state.recipe);

              // 3 RENder Results 
         console.log(model.state.search.results);
         resultsview.render( model.state.search.results);


          }
           catch (err) {

   recipeView.renderError( `${err}💥💥💥`);
    
  }
};

    //  ['hashchange' , 'load'].forEach(  ev => window.addEventListener( ev , controlRecipe));
  
  //  window.addEventListener('hashchange' ,controlRecipe )
  //  window.addEventListener('load' ,controlRecipe )



               const controlSearchResults = async function (){

                         try {


  ResultsView.renderSpinner();
  console.log(resultsview);

                          clearInput

                          const query = searchview.getQuery();

                          if(!query) return ;



              await   model.loadSearchResults('query')
              //  console.log(model.state.search.results);
                         } catch (err){

                          console.log(err);
                         }


               }


               controlSearchResults();








    const init = function (){
   
       recipeView.addHandlerRender(controlRecipe);
     searchview.addHandlerSearch(controlSearchResults)

    }
     init();
