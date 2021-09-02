new Chart(document.getElementById('myChart'), {
    type: 'bar',
    data: {
      labels: ['2009', '2010', '2011', '2012'],
      datasets: [{
        label: 'My First Dataset',
        data: [25, 59, 80, 76],
        fill: false,
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 205, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)'],
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        datalabels: {
          anchor: 'end',
          align  : 'start'        
        },
        labels: {
          render: 'image',
          textMargin: -60,
          images: [
            null, 
            null, 
            {
              src: 'https://i.stack.imgur.com/9EMtU.png',
              width: 20,
              height: 20
            },
            null
          ]
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });