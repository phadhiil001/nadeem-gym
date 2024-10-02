import { useState } from 'react';
import React from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/nadeem';

function Header({index, title, description}) {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    );
}

const Generator = () => {
    const [showModal, setShowModal] = useState(false)
    const [poison,setPoison] = useState('individual')
    const [muscles, setMuscles] = useState([])
    const [goals, setGoals] = useState('strength_power')

    function toggleModal() {
        setShowModal(!showModal)
    }

  return (
    <SectionWrapper header={"Generate your Workout"} title={['It\'s', 'Huge', 'o\'clock']}>
        <Header index={'01'} title={'Pick your poison'} description={'Select the workout you want to enjoy.'} />
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
            {Object.keys(WORKOUTS).map((type, typeIndex) => {
                return (
                    <button onClick={() => {
                        setPoison(type)
                    }} className={'bg-slate-950 border py-3 duration-200 hover:border-blue-600 rounded-lg' + (type === poison ? 'border-blue-600' : 'border-blue-400')} key={typeIndex}>
                        <p className='capitalize'>{type.replaceAll('_', " ")}</p>
                    </button>
                )
            })}

        </div>

        <Header index={'02'} title={'Lock on target'} description={'Target the muscle judged for annihilation.'} />
        <div className='bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col'>
            <button onClick={toggleModal} className='relative flex p-3 items-center justify-center'>
                <p>Select muscle group</p>
                <i className='fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down'></i>
            </button>
            {showModal && (
                <div>modal</div>
            )}
        </div>

        <Header index={'03'} title={'Become Juggernaut'} description={'Select your ultimate objective.'} />
        <div className='grid grid-cols-3  gap-4'>
            {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                return (
                    <button onClick={() => {
                        setGoals(scheme)
                    }} className='bg-slate-950 border border-blue-400 py-3 duration-200 hover:border-blue-600 rounded-lg' key={schemeIndex}>
                        <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
                    </button>
                )
            })}

        </div>

    </SectionWrapper>
  )
}

export default Generator