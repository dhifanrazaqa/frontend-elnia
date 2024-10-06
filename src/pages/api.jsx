import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const fetchDateData = async (filters) => {
  const response = await axios.post('https://8043-114-10-119-91.ngrok-free.app/predict', filters);
  console.log(response.data)
  return response.data;
};

const DateFetcherComponent = () => {
  const [fetchedData, setFetchedData] = useState({ date: ['a'], value: [10] });
  const [filters, setFilters] = useState({ tanggal: "20-10-2024" });

  const { data, error, isLoading, isFetching, refetch } = useQuery({
    queryKey: ['fetchDate', filters],
    queryFn: () => fetchDateData(filters),
    enabled: true,
  });

  useEffect(() => {
    if (data && data.forecasting_data) {
      console.log(data);
      setFetchedData({
        date: [...data.historical_data.date, ...data.forecasting_data.date] || [],
        value: [...data.historical_data.value, ...data.forecasting_data.value] || [],
      });
    }
  }, [data]);

  const chartData = {
    labels: fetchedData.date,
    datasets: [
      {
        label: 'Data over time',
        data: fetchedData.value,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Forecasting Data Chart',
      },
    },
  };

  return (
    <div>
      <h2>Fetch Date with POST Request</h2>

      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}

      {fetchedData.date.length > 0 && (
        <div>
          <h3>Fetched Data Chart:</h3>
          <Line data={chartData} options={chartOptions} />
        </div>
      )}

      <button onClick={refetch} disabled={isFetching}>
        {isFetching ? 'Fetching...' : 'Refetch Data'}
      </button>
    </div>
  );
};

export default DateFetcherComponent;
