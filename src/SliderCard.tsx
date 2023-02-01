import { SliderCardType } from './data'
import { useSlider } from './context/slider-context'
interface Props extends SliderCardType {
  idx: number
  classes: string
}

const SliderCard = (props: Props) => {
  const setSelectedIdx = useSlider(state => state.setSelectedIdx)
  return (
    <div
      onClick={() => setSelectedIdx(props.idx)}
      className={`${props.classes} bg-gray-700 text-gray-200 p-10 rounded-md shadow-md shadow-gray-900
    hover:shadow-lg hover:shadow-gray-900 transition-all duration-300
    flex flex-col items-center space-y-10
    absolute w-64 sm:w-96 lg:w-72 lg:h-[30rem]`}
    >
      <h3 className='text-red-800 text-3xl'>{props.title}</h3>
      <div>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default SliderCard
