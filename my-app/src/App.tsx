import React from 'react';
import { Table } from '@ucloud-fe/react-components';

const App: React.FC = () => {
  const columns = [
    { title: 'key', dataIndex: 'key', key: 'key'},
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
  ];

  const dataSource = [
    { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
    { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' },
    { key: '3', name: 'Joe Black', age: 32, address: 'Sydney No. 1 Lake Park' },
  ];

  function handleSearch(){
    columns.pop();
  }

  return (
    <div className="App">
      <Table handleSearch={handleSearch} columns={columns} dataSource={dataSource} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default App;
