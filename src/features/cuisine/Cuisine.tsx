import React from 'react';
import {
} from './cuisineSlice';
import styles from './Cuisine.module.css';
import { chooseCuisine, selectCuisine } from './cuisineSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Cuisines } from './cuisineTypes';

const Cuisine =  () => {  
  const dispatch = useAppDispatch();
  const cuisine = useAppSelector(selectCuisine);

  return (
    <div>
      <h1>Select a cuisine to see menu options</h1>
      <p>{(cuisine !== Cuisines.NONE) ? cuisine : null}</p>
      <ul>
        {Object.values(Cuisines).map((e, i) => {
          if (e !== 'None') {
            return (
              <li className={styles.row} key={i}>
                <button onClick={() => dispatch(chooseCuisine(e))}>{e}</button>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default Cuisine;
