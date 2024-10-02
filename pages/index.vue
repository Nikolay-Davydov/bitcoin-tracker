<template>
    <div>
      <div>
        <button @click="fetchData('1d')">1 день</button>
        <button @click="fetchData('1w')">1 неделя</button>
        <button @click="fetchData('1m')">1 месяц</button>
        <button @click="fetchData('1y')">1 год</button>
      </div>
      <PriceChart :chart-data="chartData" />
    </div>
  </template>
  
  <script setup>
  import PriceChart from '../components/PriceChart.vue';
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const chartData = ref({
    labels: [],
    datasets: [
      {
        label: 'Цена в USD',
        data: [],
        borderColor: '#42A5F5',
        fill: false,
      },
    ],
  });
  
  // Функция для получения данных по заданному периоду
  const fetchData = async (period) => {
    const response = await axios.get(`/api/prices?period=${period}`);
    chartData.value.labels = response.data.map(price => new Date(price.time).toLocaleString());
    chartData.value.datasets[0].data = response.data.map(price => price.price);
  };
  
  // Загрузка данных при первом рендере
  onMounted(() => {
    fetchData('1d'); // По умолчанию загружаем данные за день
  });
  </script>
  
  <style>
  /* Добавьте ваши стили для страницы здесь */
  </style>
  