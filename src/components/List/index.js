import React from "react";

import { ContentList, ListItem } from "./styles";
import { Column } from "../Grid";
import AddToCart from "../AddToCart";

function List({ pokemon, filtredPokemons }) {
  const renderList = (array) => {
    return array.map((poke) => {
      const { id, sprites, name, price } = poke;
      const objeto = { id, sprites, name, price };
      return (
        <Column desktop="2" table="3" mobile="12" key={id}>
          <ListItem key={id}>
            <img src={sprites.front_default} alt={name} />
            <p>{name.toUpperCase()}</p>
            <p>R${parseFloat(price).toFixed(2)}</p>
            <AddToCart item={objeto} />
          </ListItem>
        </Column>
      );
    });
  };

  return (
    <ContentList>
      {filtredPokemons.length > 0
        ? renderList(filtredPokemons)
        : renderList(pokemon)}
    </ContentList>
  );
}

export default List;
