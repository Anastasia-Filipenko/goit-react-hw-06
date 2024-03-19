import { useId } from 'react';
import css from '../SearchBox/SearchBox.module.css';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const search = useId();
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <label htmlFor={search}>Find contact by name</label>
      <input
        className={css.input}
        type="text"
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
        id={search}
      />
    </div>
  );
}
