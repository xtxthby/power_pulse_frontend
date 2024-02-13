import {
  InputWrapper,
  StyledSelect,
  IconChevron,
  ButtonShevron,
} from './FilterCategories.styled';

import iconsPath from '../../assets/icons/svg-sprite.svg';

const iconCancel = (
  <IconChevron>
    <use href={iconsPath + '#icon-chevrondown'}></use>
  </IconChevron>
);

const items = [
  { value: 1, text: 'Alcoholic drinks' },
  { value: 2, text: 'Berries' },
  { value: 3, text: 'Cereales' },
  { value: 4, text: 'Dairy' },
  { value: 5, text: 'Dried fruits' },
];

export const FilterCategories = () => {
  return (
    <InputWrapper>
      <StyledSelect defaultValue="0">
        <option value="0" key="0" disabled>
          Categories
        </option>
        {items.map(({ value, text }) => {
          return (
            <option value={value} key={value}>
              {text}
            </option>
          );
        })}
      </StyledSelect>

      <ButtonShevron type="button">{iconCancel}</ButtonShevron>
    </InputWrapper>
  );
};
