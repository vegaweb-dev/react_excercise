import React, { useState } from 'react';

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const initialForm = {
    name: '',
    constellation: '',
    id: null,
  };

  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.constellation) {
      alert('datos incompletos');
      return;
    }

    if (dataToEdit === null) {
      createData(form);
    } else {
      updateData(form);
    }
  };
  const handleReset = (e) => {};

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="constellation"
          value={form.constellation}
          placeholder="constellation"
          onChange={handleChange}
        />
        <input type="submit" value="Enviar" onSubmit={handleSubmit} />
        <input type="reset" value="Resetear" onClick={handleReset} />
      </form>
    </>
  );
};

export default CrudForm;
