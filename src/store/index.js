import { types as MSTTypes } from 'mobx-state-tree'

const Store = MSTTypes.model({
  clockCountStart: false,
  workStarted: false,
  clockCount: 0,
  clockCountTotal: 0,
}).actions(self => ({
  runClock () {
    self.clockCountStart = true
    self.clockCount = 0
  },
  endClock () {
    self.clockCountStart = false
    self.workStarted = false
  },
  startWork () {
    self.workStarted = true
  },
  takeRest () {
    self.workStarted = false
    self.clockCount  += 1
    self.clockCountTotal += 1
  },
}))

const store = Store.create({
  // state1: 'lalala'
})

export default store
