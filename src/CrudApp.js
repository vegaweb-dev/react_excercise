import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb = [
  {
    id: 1,
    name: 'name1',
    constellation: 'constellation1',
  },
  {
    id: 2,
    name: 'name2',
    constellation: 'constellation2',
  },
  {
    id: 3,
    name: 'name3',
    constellation: 'constellation3',
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };
  const updateData = () => {};
  const deleteData = () => {};

  return (
    <>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable data={db} deleteData={deleteData} />
    </>
  );
};

export default CrudApp;
