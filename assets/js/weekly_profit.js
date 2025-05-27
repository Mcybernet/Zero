const hariMinggu = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
            
function generateDataRupiah() {
  const hasil = [];
  for (let i = 0; i < 7; i++) {
    const nilai = Math.floor(Math.random() * 2000000) + 100000;
    hasil.push(nilai);
  }
  return hasil;
}

const opsiChartMingguan = {
  series: [{
    name: "Keuntungan",
    data: generateDataRupiah()
  },
  {
    name: "Keuntungan",
    data: generateDataRupiah()
  }
  ],
  chart: {
    type: 'line',
    height: 400,
    toolbar: { show: false }, //Hilangkan tombol toolbar
    zoom: { enabled: false },
    foreColor: '#818FA0',
    animations: {
      enabled: !0,
      easing: "linear",
      dynamicAnimation: {
          speed: 2e3
      }
  },
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
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  yaxis: {
    labels: {
      formatter: function(val) {
        return 'Rp ' + val.toLocaleString('id-ID');
      }
    }
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
    theme: 'false',
    y: {
      formatter: function(val) {
        return 'Rp ' + val.toLocaleString('id-ID');
      }
    }
  },
  legend: {
    show: false
  }
};

const chartMingguan = new ApexCharts(
  document.querySelector("#weeklyTransactionChart"),
  opsiChartMingguan
);
chartMingguan.render();