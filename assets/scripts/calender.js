'use strict' ;

{
  const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const date = new Date()
  let year = date.getFullYear()
  const thisyear = date.getFullYear()
  let month = date.getMonth() + 1
  const thismonth = date.getMonth()
  let day = date.getDate()
  const today = date.getDate()
  const config = {
      show: 1,
  }
  
  function showCalendar(year, month) {
      for (let i = 0; i < config.show; i++) {
          const calendarHtml = createCalendar(year, month)
          const sec = document.createElement('section')
          sec.innerHTML = calendarHtml
          document.querySelector('#calendar').appendChild(sec)
  
          month++
          if (month > 12) {
              year++
              month = 1
          }
      }
  }
  
  function createCalendar(year, month) {
      const startDate = new Date(year, month - 1, 1) // 月の最初の日を取得
      const endDate = new Date(year, month,  0) // 月の最後の日を取得
      const endDayCount = endDate.getDate() // 月の末日
      const lastMonthEndDate = new Date(year, month - 1, 0) // 前月の最後の日の情報
      const lastMonthendDayCount = lastMonthEndDate.getDate() // 前月の末日
      const startDay = startDate.getDay() // 月の最初の日の曜日を取得
      let dayCount = 1 // 日にちのカウント
      let calendarHtml = '' // HTMLを組み立てる変数

      calendarHtml += '<h1 class="calendar-title">' + year + '年' + month + '月</h1>'
      calendarHtml += '<table>'
  
      // 曜日の行を作成
      for (let i = 0; i < weeks.length; i++) {
          calendarHtml += '<td class="date">' + weeks[i] + '</td>'
      }
  
      for (let w = 0; w < 6; w++) {
          calendarHtml += '<tr>'
  
          for (let d = 0; d < 7; d++) {
              if (w == 0 && d < startDay) {
                  // 1行目で1日の曜日の前
                  let num = lastMonthendDayCount - startDay + d + 1
                  calendarHtml += '<td class="is-transparency">' + num + '</td>'
              } else if ((year <= thisyear && month<=thismonth ) || (year < thisyear) || (month == thismonth+1 && dayCount<today)){
                  calendarHtml += '<td class="is-disabled">' + dayCount + '</td>'
                  dayCount++
              } else if (year == thisyear && month == thismonth+1 && dayCount == today ){
                  calendarHtml += '<td class="is-today">' + dayCount + '</td>'
                  dayCount++    
              }else{
                  calendarHtml += '<td class="is-available" >' + dayCount + '</td>'
                  dayCount++
              }
          }
          calendarHtml += '</tr>'
      }
      calendarHtml += '</table>'
  
      return calendarHtml
  }
  function setStudyDay(date = String(day).padStart(2, '0'), year = thisyear, month = thismonth) {
    return `${year}年${String(month + 1).padStart(2, '0')}月${date}日`;
  }

  const inputStudyDay = document.getElementById('studyDay-modalButton')
  inputStudyDay.value = setStudyDay()
  
  
  function moveCalendar(e) {
      document.querySelector('#calendar').innerHTML = ''
  
      if (e.target.id === 'prev') {
          month--
          if (month < 1) {
              year--
              month = 12
          }
      }
      if (e.target.id === 'next') {
          month++
          if (month > 12) {
              year++
              month = 1
          }
      }
      showCalendar(year, month)
  }
  document.querySelector('#prev').addEventListener('click', moveCalendar)
  document.querySelector('#prev').addEventListener('click', setSelectedDay)
  document.querySelector('#next').addEventListener('click', moveCalendar)
  document.querySelector('#next').addEventListener('click', setSelectedDay)
  

  showCalendar(year, month)

  // 選択できる日にちのDOMを得する
  function setSelectedDay() {
    //うるう年の設定
    // function isLeapYear(year){
    //   t.forEach(date=>{
    //     const dateNumber = date.innerHTML
    //     if( ((year % 4 === 0 && year % 100 !== 0)&&(month+1===2)) || ((year % 400 === 0)&&(month+1==2))) {
    //       t.forEach(date=>{
    //         const dateNumber = date.innerHTML
    //         if (dateNumber===30){
    //           date.classList.add('is-transparency')
    //         }
    //       }
    //     }
    //   } 
    //小の月の設定
    const minMonth = [2,4,6,9,11]
    const t = document.querySelectorAll('td')
    t.forEach(date=>{
      const dateNumber = date.innerHTML 
      for (let i=0;i<minMonth.length;i++){
        if ((month === minMonth[i]) && (dateNumber>30)){
          date.classList.add('is-transparency')
        }else if (dateNumber>31){
          date.classList.add('is-transparency')
        }
      }
    })
    const getDate = document.querySelectorAll('.is-today,.is-disabled')
    // 取得した日にちでループを回す
    getDate.forEach(td => {
      // tdには日にちのDOM1つが入り、それがclickされた時の挙動設定する
        td.addEventListener('click', (e) => { 
        // selected-dateというclassをもつtdを取得する
        const selectedDate = document.querySelector('.is-selected')
        // selected-dateというclassをもつtdがあれば、そのdomらselected-dateを取り除く
        if (selectedDate) {
          selectedDate.classList.remove('is-selected')
        }  
        // clickされたtdにselected-dateというclassを追加する
        td.classList.add('is-selected')
        // 学習日を更新する
        inputStudyDay.value = setStudyDay(day=e.target.textContent,year,month-1)
      })
    })
  }
  setSelectedDay()
}
