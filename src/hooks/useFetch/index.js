import React from 'react';

const useFetch = ({ func, arg = null }) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const executeFunction = async () => func(arg);

  const fetchData = async () => {
    try {
      const response = await executeFunction();
      if (response) {
        setData(response);
        setLoading(false);
      }
    } catch {
      setError(true);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetch;
