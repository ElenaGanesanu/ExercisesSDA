import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useEffect, useState, useContext } from 'react';
import { Context } from '../context/Context';

export default function Categories(props) {

  const { setAdvertisements, initialAdvertisements } = useContext(Context);
  
  useEffect(() => {
      fetch("http://localhost:3001/categories")
      .then(response=>response.json())
      .then(data=> {setCategories(data)});
    }, []);
    
  const [categories, setCategories] = useState([]);

  const filterAds = (category) => {
    // console.log(category);
    const arr = initialAdvertisements.filter((element) => element.category.toLowerCase() === category.toLowerCase());
    console.log(arr)
    setAdvertisements(arr);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Categories
        </ListSubheader>
      }
    >
      <ListItemButton onClick={() => setAdvertisements(initialAdvertisements)}>
        <ListItemText primary="All Advertisements"/>
      </ListItemButton>
        {categories.map((category) => {
            return (
                <ListItemButton key={category.id} onClick={() => filterAds(category.name)}>
        <ListItemText primary={category.name} />
      </ListItemButton>
            )
        })}
    </List>
  );
}
