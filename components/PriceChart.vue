<!-- PriceChart.vue -->
<template>
    <div>
      <LineChart :chart-data="chartData" />
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import { Line } from 'vue-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, LinearScale } from 'chart.js';
  
  // Регистрируем необходимые элементы графика
  ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, LinearScale);
  
  // Определяем входные параметры компонента
  const props = defineProps({
    chartData: {
      type: Object,
      required: true,
    },
  });
  </script>
  