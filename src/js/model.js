import { async } from "regenerator-runtime";
import {API_URL} from './config';
import {getJSON } from './helper';
  export const state = {
recipe : {},

   };

   
  export const loadRecipe = async function (id){
    
    try { 
    const res = await fetch(
      `${API_URL}/${id}`
    );
              // // 
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} ${res.status}`);
        // //     //

    const  { recipe } = data.data;
    state.recipe = {
      SourceUrl: recipe.source_url,
      Publisher: recipe.publisher,
      CookingTime: recipe.cooking_time,
      Id: recipe.id,
      Image: recipe.image_url,
      Title: recipe.title,
      Servings: recipe.servings,
      Ingredients: recipe.ingredients,
    };
    console.log( state.recipe)
  } catch (err){

    console.log(`${err}💥💥💥`);
    throw err ;



  }

  }




  