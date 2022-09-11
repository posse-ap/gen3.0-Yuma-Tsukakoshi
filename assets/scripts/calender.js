'use strict' ;

{
  const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const date = new Date()
  let year = date.getFullYear()
  let thisyear = date.getFullYear()
  let month = date.getMonth() + 1
  let thismonth = date.getMonth()
  let day = date.getDate()
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
  
      for (let w = 0; w < 5; w++) {
          calendarHtml += '<tr>'
  
          for (let d = 0; d < 7; d++) {
              if (w == 0 && d < startDay) {
                  // 1行目で1日の曜日の前
                  let num = lastMonthendDayCount - startDay + d + 1
                  calendarHtml += '<td class="is-transparency">' + num + '</td>'
              } else if (month == thismonth+1 && dayCount<day) {
                  calendarHtml += '<td class="is-disabled">' + dayCount + '</td>'
                  dayCount++
              } else if (year <= thisyear && month<=thismonth){
                  calendarHtml += '<td class="is-disabled">' + dayCount + '</td>'
                  dayCount++
              } else if (year < thisyear){
                  calendarHtml += '<td class="is-disabled">' + dayCount + '</td>'
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
  
  // 昨日以前とdisabled(前月と来月の日にち)以外の日にちDOMを得する
  const validaDates = document.querySelectorAll('.is-available')
  const td = document.querySelectorAll('td');
  // 取得した日にちでループを回す
  validaDates.forEach(td => {
    // tdには日にちのDOM1つが入り、それがclickされた時の挙動設定する
    td.addEventListener('click', (e) => {
      // clickされたtdにselected-dateというclassを追加する
      td.classList.add('is-selected')
      // selected-dateというclassをもつtdを取得する
      const selectedDate = document.querySelector('.is-selected')
      // 学習日を更新する
      inputStudyDay.value = setStudyDay(e.target.textContent)
      // selected-dateというclassをもつtdがあれば、そのdomらselected-dateを取り除く
      if (selectedDate) {
        selectedDate.classList.remove('is-selected')
      }
    })
  })
  
  
  
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
  document.querySelector('#next').addEventListener('click', moveCalendar)

  showCalendar(year, month)
}
