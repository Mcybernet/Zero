// Generate transaction data
function generateTransactionData() {
    const data = [];
    for (let i = 0; i < 15; i++) {
      const day = new Date();
      day.setDate(day.getDate() - 15 + i);
      const isWeekend = [0, 6].includes(day.getDay());
      const base = isWeekend ? 25 : 15;
      const variation = Math.random() * 10;
      data.push(Math.round(base + variation));
    }
    return data;
  }

  // Generate date labels
  function generateDateLabels() {
    const labels = [];
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const today = new Date();
    for (let i = 14; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      labels.push(`${months[date.getMonth()]} ${date.getDate()}`);
    }
    return labels;
  }

  // Chart configuration
  const options = {
    series: [{
      name: "Transaksi Harian",
      data: generateTransactionData()
    }],
    chart: {
      type: 'line',
      height: 275,
      zoom: { enabled: false },
      toolbar: { show: false },
      foreColor: '#6b7280'
    },
    colors: ['#727CF5'],
    stroke: {
      width: 6,
      curve: 'smooth'
    },
    markers: {
      size: 0
    },
    xaxis: {
      categories: generateDateLabels(),
      axisBorder: { show: false },
      axisTicks: { show: false },
      tooltip: {
        enabled: true,
        style: {
          fontSize: '13px'
        }
      },
      crosshairs: {
        show: true,
        width: 1,
        position: 'back',
        stroke: {
          color: '#9CA3AF', // warna garis vertikal
          width: 1,
          dashArray: 3,
        }
      }
    },
    yaxis: {
      min: 0,
      max: 50,
      tickAmount: 5
    },
    grid: {
      show: true,
      borderColor: '#474F58',
      position: 'back',
      xaxis: {
        lines: { show: true }
      },
      yaxis: {
        lines: { show: true }
      }
    },
    tooltip: {
        theme: 'false',
        
    }
  };

  const chart = new ApexCharts(
    document.querySelector("#transactionTrendChart"),
    options
  );
  chart.render();