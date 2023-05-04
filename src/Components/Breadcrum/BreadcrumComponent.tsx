import React from 'react';
import { Component } from './styles';
import { Category } from '../../Types/SearchResult';

interface Props {
  categories: Category[];
}

const BreadcrumComponent: React.FC<Props> = ({ categories }) => {
  const firstCategoryValue = categories[0];
  
  return (
    <Component>
      {firstCategoryValue?.path_from_root.map((category, index) => {
        const last = index === firstCategoryValue.path_from_root.length - 1;
        const separator = last ? null : <span className="separator"> {'>'} </span>;
        return (
          <span key={category.id}>
            <span>{category.name}</span>
            {separator}
          </span>
        );
      })}
    </Component>
  );
};

export default BreadcrumComponent;
