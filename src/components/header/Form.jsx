import React from "react";
import { FormContainer, FoodInput, Button, Select } from "./HeaderStyles";

const Form = ({ setQuery, getData, mealTypes, setMealType, mealType, query }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
    setQuery('');
    setMealType(mealTypes[0].toLowerCase())
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FoodInput
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <Button
        type="submit"
      >
        Search
      </Button>
      <Select
        name="mealTypes"
        id="mealTypes"
        onChange={(e) => setMealType(e.target.value)}
        value={mealType}
      >
        {mealTypes.map((item, index) => (
          <option key={index} value={item.toLowerCase()}>
            {item}
          </option>
        ))}
      </Select>
    </FormContainer>
  );
};

export default Form;
