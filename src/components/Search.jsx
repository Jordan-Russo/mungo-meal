import { Form, Input, InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import { useNavigate } from 'react-router-dom';

export default function Search({id, btnMsg, placeholder}) {
const navigate = useNavigate()
async function handleSearch(e) {
  const userInput = document.querySelector(`#${id}`).value.trim().replaceAll();
  if(!userInput){
    console.error('No input given to search form')
    return
  }
  const isUPC = !isNaN(Number(userInput))
  navigate(isUPC ? `/product/${userInput}` : `/search/${userInput}`)
  // after determining input type
  // route instead
    // upc route:
    // description route:
  // make each route then send the specfic api request
    // so all you need to do is redirect to the right url then the component will take the params from the url and call the api.
} 

  return (
    <>
      <Form onSubmit={handleSearch}>
        <InputGroup>
          <Input id={id} placeholder={placeholder} autoComplete='off'/>
          <InputGroup.Button onClick={handleSearch}>
            <SearchIcon/>
            &nbsp;{btnMsg}
          </InputGroup.Button>
        </InputGroup>
      </Form>
    </>
  )
}

// old version:

// import { Form, Input, InputGroup } from 'rsuite';
// import SearchIcon from '@rsuite/icons/Search';

// export default function Search({msg, id, btnMsg, setter, placeholder}) {

// async function handleSearch(e) {
//   const userInput = document.querySelector(`#${id}`).value.trim().replaceAll();
//   if(!userInput){
//     console.log('No input given')
//     return
//   }
//   console.log(userInput);
//   const isUPC = !isNaN(Number(userInput))
//   // after determining input type
//   // route instead
//     // upc route:
//     // description route:
//   // make each route then send the specfic api request
//     // so all you need to do is redirect to the right url then the component will take the params from the url and call the api.

//   let url = "https://world.openfoodfacts.net/api/v2/"
//   const baseParams = 'fields=code,product_name_en,nutrition_grades,image_thumb_url,brands,quantity,ecoscore_grade'
//   const extraParams = 'image_url,energy-kcal_100g,carbohydrates_100g,fat_100g,fiber_100g,proteins_100g,sodium_100g,sugars_100g,image_nutrition_url,allergens_tags,traces_tags,ingredients_text,image_ingredients_url'
//   if(isUPC){
//     url += `product/${userInput}?${baseParams},${extraParams}`
//   }else{
//     url += `search?page_size=24&page=1&sort_by=popularity_key&${baseParams}&countries_tags_en=united-states&categories_tags_en=${userInput}`
//   }
//   console.log(url)
//   const res = await fetch(url);
//   const json = await res.json();
//   console.log(json)
//   if(isUPC){
//     const product = json.product;
//   }else{
//     const products = json.products;
//   }
//   const result = json[isUPC ? 'product' : "products"]
//   console.log(result);
//   setter(result);
// } 

//   return (
//     <>
//       <Form onSubmit={handleSearch}>
//         <InputGroup>
//           <Input id={id} placeholder={placeholder}/>
//           <InputGroup.Button onClick={handleSearch}>
//             <SearchIcon/>
//             &nbsp;Find Products
//           </InputGroup.Button>
//         </InputGroup>
//       </Form>
//     </>
//   )
// }