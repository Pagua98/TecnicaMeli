import React from 'react';
import { Filter } from '../../Types/Breadcrum';
import { Component } from './styles';

interface Props {
  filters: Filter[];
}

const BreadcrumComponent: React.FC<Props> = ({ filters }) => {
  const categoryValues = filters.find((filter) => filter.id === 'category')?.values || [];
  const firstCategoryValue = categoryValues[0];
  
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
