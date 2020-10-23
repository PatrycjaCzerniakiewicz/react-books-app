import React from 'react';

const FormSection = ({
  onSubmit,
  query,
  onChange,
  error,
}) => {
  return (
    <form className="form-section" onSubmit={onSubmit}>
        <input
          type="search"
          value={query}
          onChange={onChange}
          required
        />
        <button type="submit">Szukaj</button>
    </form>
  );
};

export default FormSection;