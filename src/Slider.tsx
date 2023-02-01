import { useEffect, useState } from 'react'
import SliderCard from './SliderCard'
import { data } from './data'
import { useSlider } from './context/slider-context'
interface Props {}

const Slider = (props: Props) => {
  const setDataLength = useSlider(state => state.setDataLength)
  const setSelectedIdx = useSlider(state => state.setSelectedIdx)
  const selectedIdx = useSlider(state => state.selectedIdx)
  const leftIdx = useSlider(state => state.leftIdx)
  const rightIdx = useSlider(state => state.rightIdx)
  const increaseIdx = useSlider(state => state.increaseIdx)
  const decreaseIdx = useSlider(state => state.decreaseIdx)

  useEffect(() => {
    setDataLength(data.length)
    setSelectedIdx(0)
  }, [])

  const rightClickHandler = () => {
    increaseIdx()
  }
  const leftClickHandler = () => {
    decreaseIdx()
  }

  return (
    <div className='relative max-w-4xl bg-blue-400 w-full min-h-[35rem]'>
      {data.map((card, idx) => {
        let className = 'card'

        if (idx === selectedIdx) className = 'card card--active'
        else if (idx === rightIdx) className = 'card card--right'
        else if (idx === leftIdx) className = 'card card--left'
        else className = 'card'

        return <SliderCard classes={className} key={idx} {...card} idx={idx} />
      })}

      <div className='absolute -bottom-24 left-[50%] transform -translate-x-[50%] -translate-y-[50%] flex flex-row gap-16'>
        <button
          onClick={leftClickHandler}
          className='font-semibold text-7xl text-gray-500'
        >
          {'<'}
        </button>
        <button
          onClick={rightClickHandler}
          className='font-semibold text-7xl text-gray-500'
        >
          {'>'}
        </button>
      </div>
    </div>
  )
}

export default Slider
