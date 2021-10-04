
export const ChartData = {
  header: 'Daily API Usage',
  labels: ['July 29', 'July 30', 'July 31', 'August 01', 'August 02'],
  datasets: [
    {
      type: 'line',
      label: 'Certificates Estimated',
      data: [930.784985, 1283.14931, 1211.207325, 1084.803212, 892.999637],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    }, {
      type: 'line',
      label: 'Certificates Purchased',
      data: [29.574118, 42.6275667, 50.943793, 40.907479, 28.215573],
      fill: false,
      borderColor: 'rgb(54, 162, 235)'
    }
  ],
}

export const TableData = [
  { date: 'July 29', ce: '930.784985', cp: '29.574118' },
  { date: 'July 30', ce: '1283.14931', cp: '42.6275667' },
  { date: 'July 31', ce: '1211.207325', cp: '50.943793' },
  { date: 'August 01', ce: '1084.803212', cp: '40.907479' },
  { date: 'August 02', ce: '892.999637', cp: '28.215573' }
]

export const TableDataHeaders = ['Date', 'Certificates Estimated', 'Certificates Purchased']

