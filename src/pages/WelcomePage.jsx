import { Panel, Stack } from 'rsuite';
import Search from '../components/Search'

export default function WelcomePage() {
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
        </Panel>
      </Panel>
    </Stack>
  );
}

// copy

// import { Panel, Stack } from 'rsuite';
// import {useState} from 'react'
// import Search from '../components/Search'
// import Item from '../components/Item'

// function WelcomePage() {
//   let [matches, setMatches] = useState([]);
//   return (
//     <Stack direction="column" spacing={20} alignItems="center" style={{ marginTop: 30 }}>
//       <Panel shaded bordered bodyFill style={{ display: 'inline-block', textAlign: 'center'}}>
//         <Panel>
//           <img src="logo.svg" style={{ maxHeight: 80, minHeight: 30, maxWidth: '80%'}} alt='Mungo Meal Logo' />
//           <h2>Welcome to Mungo Meal!</h2>
//           <p>Empower Your Plate; Know Your Food, Uncover the Truth!</p>
//           <p>
//             Get started by searching for your favorite food or an item in your shopping cart either with a description or a UPC code #. 
//           </p>
//           <Search 
//           id="search"
//           btnMsg="Find Products"
//           placeholder="ex. apple pie"
//           setter={setMatches}
//         />
//         <div className='item-container' style={{
//           marginTop: 50,
//           display: 'flex',
//           flexWrap: 'wrap',
//           justifyContent: 'space-around',
//           alignItems: 'stretch',
//           gap: 10
//         }}>
//         {/* Handles Products Search */}
//         { Array.isArray(matches) &&
//           matches.map(
//             (product) => 
//               <Item 
//                 product={product}
//                 key={product.code} 
//                 setter={setMatches}
//               />
//           )
//         }
//         {/* Handles Item Search */}
//         { Array.isArray(matches) || 
//           <Item
//           product={matches}
//           />
//         }
//         </div>
//         </Panel>
//       </Panel>
//     </Stack>
//   );
// }

// export default WelcomePage;