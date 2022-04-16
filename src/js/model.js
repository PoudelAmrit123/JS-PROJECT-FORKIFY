import { async } from "regenerator-runtime";
import {API_URL} from './config';
import {getJSON } from './helper';
  export const state = {
recipe : {},
 search : {
   query : '',
   results : [],
 }

   };

   
  export const loadRecipe = async function (id){
    
    try { 
    const res = await fetch(
      `${API_URL}${id}`
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
    // console.log( state.recipe)
  } catch (err){

    console.log(`${err}💥💥💥`);
    throw err ;



  }

  }


            export const loadSearchResults = async function (query){

                  try {
                    state.search.query = query ; 


                     const data = await getJSON(`${API_URL}?search=${query}`)
                    //  console.log(data);

                    state.search.results =  data.data.recipes.map ( rec => {

                return {
                  Publisher: rec.publisher,
        
                  Id: rec.id,
                  Image: rec.image_url,
                  Title: rec.title,

                }

                     })


                  } catch (err ){

                    console.log(`${err}💥💥💥`);
                    throw err ;
                
                  }



            } 

            // loadSearchResults('milk')










