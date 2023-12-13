import { Panel, Stack } from 'rsuite';
import {useState, useEffect} from 'react'
import Item from '../components/Item'
import { supabaseClient as supabase } from '../config/supabase-client';
import {useAuth} from '../hooks/Auth'

// use supabase

// insert favorites
// get favorites
// remove favorites


function FavoritesPage() {
  let [matches, setMatches] = useState([]);
  const { user: {id: userId}} = useAuth()

  async function getFavorites(setter) {
    // use API to get favorite IDs from supabase that match userID
    // use FoodFactsAPI to get the data for all products listed from those matches
    // setState and display them.
    const {data, error} = await supabase
    .from('favorites')
    .select('product_id')
    .eq('user_id', userId)
    
    // console.log(userId)
      const codes = data ? data.map(({product_id}) => product_id).join(',') : ''
      const res = await fetch(`https://world.openfoodfacts.net/api/v2/search?code=${codes}&page_size=24&page=1&sort_by=popularity_key&fields=code,product_name_en,nutrition_grades,image_thumb_url,brands,quantity,ecoscore_grade`)
      // handle error
      const {products} = await res.json()
      setter(products)
    
    if(error){
      console.error(`Error fetching data: ${error.message}`)
    }
  }

  useEffect(() => {getFavorites(setMatches)}, [])

  // you can only modify the state when you're viewing a single product by clicking on a star
  // when you view single products, that star should appear in 2 forms whether you have it favorited or not.

  return (
    <Stack direction="column" spacing={20} alignItems="center" style={{ marginTop: 30 }}>
      <Panel shaded bordered bodyFill style={{ display: 'inline-block', textAlign: 'center'}}>
        <Panel>
          <img src="logo.svg" style={{ maxHeight: 80, minHeight: 30, maxWidth: '80%'}} alt='Mungo Meal Logo' />
          <h2>Your Favorite Products!</h2>
          <div className='item-container' style={{
            marginTop: 50,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'stretch',
            gap: 10
          }}>
          {/* Handles Products Search */}
          {Array.isArray(matches) &&
            matches.map(
              (product) => 
                <Item 
                  product={product}
                  key={product.code} 
                  setter={setMatches}
                />
            )
          }
          {/* Handles Item Search */}
          { Array.isArray(matches) || 
            <Item
            product={matches}
            />
          }
          </div>
        </Panel>
      </Panel>
    </Stack>
  );
}

export default FavoritesPage;
