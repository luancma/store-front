import React from 'react';
import MaterialTable from 'material-table';
import { Button } from '@material-ui/core';
import getAllStock from '../../services/stock/getAllStock';
import useFetch from '../../hooks/useFetch';
import SContainer from '../../components/styled/Container';

function Stock() {
  const getAllRequest = async () => getAllStock();

  const { data, loading, error } = useFetch({ func: getAllRequest });

  if (loading) {
    return <p>Carregando</p>;
  }

  if (error) {
    return <p>Ocorreu um erro</p>;
  }

  return (
    <SContainer>
      <Button variant="contained" color="primary">
        Adicionar
      </Button>
      <MaterialTable
        columns={[
          { title: 'Name', field: 'product.name' },
          { title: 'Preço de venda', field: 'product.salePrice' },
          { title: 'Estoque atual', field: 'current', type: 'numeric' },
          { title: 'Total', field: 'total', type: 'numeric' },
        ]}
        data={data}
        title="Estoque"
      />
    </SContainer>
  );
}

export default Stock;
