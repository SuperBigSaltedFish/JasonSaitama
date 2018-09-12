import { types as MSTTypes } from 'mobx-state-tree'

const Store = MSTTypes.model({
  state1: 'default',
  state2: 1,
}).actions(self => ({
  change (someStr) {
    self.state1 = someStr
  }
}))

const store = Store.create({
  // state1: 'lalala'
})

export default store
