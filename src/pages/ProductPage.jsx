import { Panel, Stack } from 'rsuite';
import {useState, useEffect} from 'react'
import Search from '../components/Search'
import Item from '../components/Item'
import { useParams } from 'react-router-dom';
import { getProduct } from '../api/posts';
import { useAuth } from '../hooks/Auth';
import { supabaseClient as supabase } from '../config/supabase-client';

export default function ProductPage() {
  let [product, setProduct] = useState([]);
  let [favorite, setFavorite] = useState(false);
  const { id } = useParams();
  const userId = useAuth()?.user?.id

  async function checkFavorite(setter){
    if(userId){
      const { data, error } = await supabase
        .from('favorites')
        .select('product_id')
        .eq('product_id', id)
        .eq('user_id', userId)
        .limit(1)
      
      const isFavorited = Boolean(data?.length)
      // console.log(`${id} is ${isFavorited ? 'favorited' : 'not favorited'}`)
      setter(isFavorited)
      if(error){
        console.error(`Error fetching data: ${error.message}`)
      }
    }
  }

  useEffect(() => {
    getProduct(setProduct, id)
  }, [id]);
  // calls api for a product
  useEffect(() => {
    checkFavorite(setFavorite)
  }, [id])

  return (
    <Stack direction="column" spacing={20} alignItems="center" style={{ marginTop: 30 }}>
      <Panel shaded bordered bodyFill style={{ display: 'inline-block', textAlign: 'center'}}>
        <Panel>
          <img src="/logo.svg" style={{ maxHeight: 80, minHeight: 30, maxWidth: '80%'}} alt='Mungo Meal Logo' />
          <h2>Welcome to Mungo Meal!</h2>
          <p>Empower Your Plate; Know Your Food, Uncover the Truth!</p>
          <p>
            Get started by searching for your favorite food or an item in your shopping cart either with a description or a UPC code #
          </p>
          <Search 
          id="searchBar"
          btnMsg="Find Products"
          placeholder="ex. apple pie"
          />
        <div className='item-container' style={{
          marginTop: 50,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignItems: 'stretch',
          gap: 10
        }}>
        {/* Handles Item Search */}
        { product &&
          <Item product={product} isFavorited={favorite} setFavorite={setFavorite}/>
        }
        </div>
        </Panel>
      </Panel>
    </Stack>
  );
}