export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Трекер цен на биткоин',
      meta: [
        { name: 'description', content: 'Отслеживайте и визуализируйте цены на биткоин.' },
      ],
    },
  },
});


