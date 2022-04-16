 import * as model from './model' ; 
 import recipeView from './views/recipeViews';

import 'core-js/stable';
import 'regenerator-runtime/runtime' ; 



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


          }
           catch (err) {

   recipeView.renderError( `${err}💥💥💥`);
    
  }
};

    //  ['hashchange' , 'load'].forEach(  ev => window.addEventListener( ev , controlRecipe));
  
  //  window.addEventListener('hashchange' ,controlRecipe )
  //  window.addEventListener('load' ,controlRecipe )


    const init = function (){
   
       recipeView.addHandlerRender(controlRecipe);


    }
     init();
