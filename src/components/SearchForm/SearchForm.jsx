import { Button, Form } from './SearchForm.styled';
import { GoSearch } from 'react-icons/go';

export const SearchForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={event => onSubmit(event)}>
      <input type="text" name="query" />
      <Button type="submit">
        <GoSearch size={19} />
      </Button>
    </Form>
  );
};
