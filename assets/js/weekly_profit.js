const hariMinggu = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
            
function generateDataRupiah() {
  const hasil = [];
  for (let i = 0; i < 7; i++) {
    const nilai = Math.floor(Math.random() * 400000) + 100000;
    hasil.push(nilai);
  }
  return hasil;
}

const opsiChartMingguan = {
  series: [{
    name: "Transaksi",
    data: generateDataRupiah()
  },{
      name: "Transaksi",
      data: generateDataRupiah()
  }
  ],
  chart: {
    type: 'line',
    height: 400,
    toolbar: { show: false }, //Hilangkan tombol toolbar
    zoom: { enabled: false },
    foreColor: '#cbd5e1'
  },
  colors: ['#727CF5','#14B98C'],
  stroke: {
    width: 10,
    curve: 'smooth'
  },
  markers: {
  //   size: 4
  },
  xaxis: {
    categories: hariMinggu,
  //   title: {
  //     text: 'Tanggal',
  //     style: {
  //       color: '#cbd5e1',
  //       fontSize: '12px',
  //       fontWeight: 300
  //     },
  //     offsetY: 10
  //   },
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  yaxis: {
    labels: {
      formatter: function(val) {
        return 'Rp ' + val.toLocaleString('id-ID');
      }
    },
  //   title: {
  //     text: 'Nominal (Rp)',
  //     style: {
  //       color: '#cbd5e1',
  //       fontSize: '12px',
  //       fontWeight: 300
  //     }
  //   }
  },
  grid: {
    show: true,
    borderColor: '#4b5563',
    strokeDashArray: 0,
    xaxis: { lines: { show: true } },
    yaxis: { lines: { show: true } },
    position: 'back',
    padding: {
      top: 0,
      right: 10,
      bottom: 0,
      left: 10
    }
  },
  tooltip: {
    y: {
      formatter: function(val) {
        return 'Rp ' + val.toLocaleString('id-ID');
      }
    }
  },
  legend: {
    show: false // ❌ Ini yang menghilangkan <span class="apexcharts-legend-marker">
  }
};

const chartMingguan = new ApexCharts(
  document.querySelector("#weeklyTransactionChart"),
  opsiChartMingguan
);
chartMingguan.render();