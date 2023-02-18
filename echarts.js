import data from './data.js';

// Create the echarts instance
var myChart = echarts.init(document.getElementById('main'));
console.log(data)
// Draw the chart
myChart.setOption({
  legend: {
    top: 'bottom',
    icon: 'pin',
  },
  tooltip: {
    trigger: 'axis',
    //так и не получилось сделать с помощью formatter : '{a}<br/> {b}: {c}'
    //пробовал с писать функцию, которая возвращала бы свойства объектов
    //    formatter: function (data) {
    //      let result = data.map(a => a.value)
    //      return result
    //    }
      },
  dataset: [{
    dimensions: ['period', 'name', 'value'],
    source: data
  }, {
    transform: {
      type: 'filter',
      config: { dimension: 'name', value: 'В программе ЦП' }
    }
  }, {
    transform: {
      type: 'filter',
      config: { dimension: 'name', value: 'В программе ИТ' }
    }
  }, {
    transform: {
      type: 'filter',
      config: { dimension: 'name', value: 'Вне программ ЦП' }
    }
  }, {
    transform: {
      type: 'filter',
      config: { dimension: 'name', value: 'Вне программ ИТ' }
    }
  }
],
  xAxis: [{ 
    type: 'category',
    axisLabel: { interval: 0},
    axisLine: {
      show: false,
    }
   }],
  yAxis: {},
  series: [
    //так же не получилось реализовать объединение значений в один label  
    {
        name: 'В программе ЦП',
        type: 'bar' ,
        datasetIndex: 1,
        stack:'first',
        encode: { x: 'period', y: 'value' },
        color: '#56B9F2',
        barMinWidth: 30,
        barWidth: 20,
      }, {
        name: 'В программе ИТ',
        type: 'bar',
        datasetIndex: 2,
        stack:'first',
        encode: { x: 'period', y: 'value' },
        color: '#0078D2',
        barMinWidth:30,
        barWidth: 20,
        label: {
          show: true,
          position: 'top',
          fontWeight: "bold",
        },
      }, {
        name: 'Вне программ ЦП', 
        type: 'bar' ,
        datasetIndex: 3,
        stack:'second',
        encode: { x: 'period', y: 'value' },
        color: '#22C38E',
        barMinWidth:30,
        barWidth: 20,
        
      }, {
        name: 'Вне программ ИТ', 
        type: 'bar',
        datasetIndex: 4,
        stack:'second',
        encode: { x: 'period', y: 'value' },
        color: '#00724C',
        barMinWidth:30,
        barWidth: 20,
        label: {
          show: true,
          position: 'top',
          fontWeight: "bold",
        },
      }
    ]
});