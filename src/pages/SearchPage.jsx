import { Panel, Stack } from 'rsuite';
import {useState, useEffect} from 'react'
import Search from '../components/Search'
import Item from '../components/Item'
import { useParams } from 'react-router-dom';
import { getProducts } from '../api/posts';

export default function SearchPage() {
  let [matches, setMatches] = useState([]);
  const { name } = useParams();
  // call getProducts with setter and name
  useEffect(() => {getProducts(setMatches, name)}, [name]);

  // have a useEffect that takes the name
  // calls the api with the name
  // setMatches with the returned data

  return (
    <Stack direction="column" spacing={20} alignItems="center" style={{ marginTop: 30 }}>
      <Panel shaded bordered bodyFill style={{ display: 'inline-block', textAlign: 'center'}}>
        <Panel>
        <img src="/logo.svg" style={{ maxHeight: 80, minHeight: 30, maxWidth: '80%'}} alt='Mungo Meal Logo' />
          <h2>Welcome to Mungo Meal!</h2>
          <p>Empower Your Plate; Know Your Food, Uncover the Truth!</p>
          <p>
            Get started by searching for your favorite food or an item in your shopping cart either with a description or a UPC code #. 
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
          {/* Handles Products Search */}
          {matches.map(
              (product) => 
                <Item 
                  product={product}
                  key={product.code} 
                />
            )
          }
        </div>
        </Panel>
      </Panel>
    </Stack>
  );
}