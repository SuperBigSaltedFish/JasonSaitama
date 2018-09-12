import store from '../store/index.js'
import { autorun } from 'mobx'

let clockTimerPrepare = () => {}
let clockTimerStartWork = () => {}
let clockTimeTakeRest = () => {}
let workAudioTimer = () => {}
let restAudioTimer = () => {}

// 闹钟核心
autorun(() => {
  if (store.clockCountStart) {
    console.log('------prepare for work------')
    clockTimerPrepare = setTimeout(() => {
      store.startWork()
    }, 600000)
  }
})

// 开始闹钟响铃
autorun(() => {
  if (store.workStarted) {
    console.log('work audio play start')
    clockTimerStartWork = setTimeout(() => {
      store.takeRest()
      console.log('count: ', store.clockCount)
      console.log('total count: ', store.clockCountTotal)
    }, 2400000)
    workAudioTimer = setTimeout(() => {
      console.log('work audio play end')
    }, 3000)
  }
})

// 结束闹钟响铃
autorun(() => {
  if (store.workStarted === false) {
    console.log('rest audio play start')
    clockTimeTakeRest = setTimeout(() => {
      store.startWork()
    }, 600000)
    restAudioTimer = setTimeout(() => {
      console.log('rest audio play end')
    }, 3000)
  }
})

// 结束计时
autorun(() => {
  if (store.clockCountStart === false) {
    console.log('------work end------')
    clearTimeout(clockTimerPrepare)
    clearTimeout(clockTimerStartWork)
    clearTimeout(clockTimeTakeRest)
    clearTimeout(workAudioTimer)
    clearTimeout(restAudioTimer)
  }
})
