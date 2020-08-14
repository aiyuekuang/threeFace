
//倒计时
let showtime = function (handle,min) {
  let count = min * 60
  let time = setInterval(()=>{
    count--
  },1000)
  if(count< 0 ){
    clearInterval(time)
  }
  return count
}