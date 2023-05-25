import React from 'react'
import { IconButton } from './IconButton'
import check from '../assets/check.svg'
import cross from '../assets/cross.svg'


export const Tarea = () => {
    return (
        <div className='flex flex-row justify-around align-middle w-22 my-auto rounded-md border-2 border-solid border-gray-400 p-10'>
            <div>
                Tarea 1
            </div>
            <div className='flex flex-row w-20 h-5 justify-around'>
                <IconButton src={check} onClick={() => console.log('check')} />
                <IconButton src={cross} onClick={() => console.log('cross')}/>

            </div>
        </div>
    )
}
