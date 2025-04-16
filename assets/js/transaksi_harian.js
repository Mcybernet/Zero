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
        zoom: { enabled: true },
        toolbar: { show: false },
        foreColor: '#6b7280'
    },
    colors: ['#727CF5'],
    stroke: {
        width: 4,
        curve: 'smooth'
    },
    markers: {
        size: 0
    },
    xaxis: {
        categories: generateDateLabels(),
        axisBorder: { show: false },
        axisTicks: { show: false },
        title: {
            text: 'Tanggal',
            style: {
                color: '#6b7280',
                fontSize: '10px',
                fontWeight: 300,
            },
            offsetY: 1 // Jarak dari label sumbu
        }
    },
    yaxis: {
        min: 0,
        max: 40,
        tickAmount: 5 // Jumlah garis horizontal
    },
    grid: {
        show: true,
        borderColor: '#474F58',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
            lines: {
                show: true // Tampilkan garis vertikal
            }
        },
        yaxis: {
            lines: {
                show: true // Tampilkan garis horizontal
            }
        },
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
                return val + ' Transaksi';
            }
        }
    }
};

 const chart = new ApexCharts(
    document.querySelector("#transactionTrendChart"), 
    options
);
chart.render();