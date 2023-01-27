$(function () {
  hour_data = [];
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  let lastDay;
  switch (month){
    case 4:
    case 6:
    case 9:
    case 11:
      lastDay = 30;
      break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      lastDay = 31;
      break;
    case 2:
      if(year%4==0 && !(year%100 == 0 && year%400 !=0)){
        lastDay = 29;
      }else{
        lastDay = 28;
      }
      break;
  }

  $.ajax({
    type: "GET",
    url: 'http://localhost:8080/api/bar_json.php',
    dataType: "json",
    async: false,
  }).then(
    function (json) {
      const lenJSON = json.length;
      for (var i=0; i<lastDay;i++){
        hour_data.push(0);
      }
      for (var j=0,k=0; j<lastDay;){
        let study_date = Number(json[k].date.substr(json[k].date.lastIndexOf('-')+1));
        let study_next_date = Number(json[k+1].date.substr(json[k+1].date.lastIndexOf('-')+1));
        
        if(study_date == (j+1)){
          hour_data[study_date-1]=json[k].hours;
          j = study_next_date-1;
          if(k==(lenJSON-2)){
            hour_data[study_next_date-1]=json[k+1].hours;
            j+=31;
            break;
          }
          k++;
        }
      }

      var options = {
        series: [{
          name: 'hour',
          data: hour_data
        }],
        chart: {
          type: 'bar',
          height: 420,
          toolbar:{
            show:false
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '50%',
            borderRadius: 5, 
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          axisTicks: {
            show:false //x軸の値区切り.-.
          },
          axisBorder:{
            show:false
          },
        
          labels: {
            formatter: function (value) {
              if (value !== undefined) {
                const categories = value.split(" ")
                const day = categories[0]
                return day % 2 == 1 ? "" : value;
              }
            },
            style: {
              colors:'#6ba0f0'
            },
          },
        },  
      
        grid: {
          yaxis: { 
              lines: {
                  show: false
              },
          }, 
        },
      
        yaxis: {
          labels: {
            formatter: function (value) {
              return value + "h";
            },
            style: {
              colors: '#6ba0f0',
            }
          },
          type:'category',
          axisTicks: {
            show: false,
            width: 1,
          }
        },
    
        labels : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30','31'],
    
        fill: {
            colors:["#1174BD"],
            type: 'gradient', 
            gradient: {
            type: 'vertical', //上垂直にグラデーション 
            gradientToColors: ['#3BCFFF'], 
          }
        },
    
        responsive: [
          {
          breakpoint: 480,
          options: {
              xaxis: {
                  labels: {
                      offsetY: -7,
                      style: {
                          fontSize: '7.5px',
                      }
                  }
              },
              chart: {
                  height: 200,
              }
          },
          }
        ]
      };  
    
      var chart = new ApexCharts(document.querySelector("#bar-charts"), options);
      chart.render();
    }
  );
}); 