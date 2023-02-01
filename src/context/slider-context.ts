import { create } from 'zustand'

type State = {
  selectedIdx: number
  leftIdx: number
  rightIdx: number
  dataLength: number
}
type Action = {
  setSelectedIdx: (idx: number) => void

  setDataLength: (len: number) => void
  increaseIdx: () => void
  decreaseIdx: () => void
}

const mod = (n: number, m: number) => {
  const result = n % m
  return result >= 0 ? result : result + m
}

export const useSlider = create<State & Action>(set => ({
  selectedIdx: 0,
  leftIdx: 0,
  rightIdx: 0,
  dataLength: 0,
  setDataLength: len => set(() => ({ dataLength: len })),
  setSelectedIdx: idx =>
    set(state => ({
      selectedIdx: idx,
      leftIdx: mod(idx - 1, state.dataLength),
      rightIdx: mod(idx + 1, state.dataLength)
    })),

  increaseIdx: () =>
    set(state => {
      let index = (state.selectedIdx + 1) % state.dataLength

      return {
        ...state,
        selectedIdx: index,
        leftIdx: mod(index - 1, state.dataLength),
        rightIdx: mod(index + 1, state.dataLength)
      }
    }),
  decreaseIdx: () =>
    set(state => {
      let index = 0
      if ((state.selectedIdx - 1) % state.dataLength < 0) {
        index = state.dataLength - 1
      } else {
        index = (state.selectedIdx - 1) % state.dataLength
      }
      return {
        ...state,
        selectedIdx: index,
        leftIdx: mod(index - 1, state.dataLength),
        rightIdx: mod(index + 1, state.dataLength)
      }
    })
}))
