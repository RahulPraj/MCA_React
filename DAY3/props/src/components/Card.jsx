import React from 'react'

function Card(props) {
  return (
    <>
     <div class="flex flex-col items-center p-7 rounded-2xl">
        <div>
            <img class="size-48 shadow-xl rounded-md" alt="" src={props.img} />
        </div>
        <div class="flex items-center">
            <span class="text-2xl font-medium">{props.name}</span>
            <span class="font-medium text-sky-500">{props.band}</span>
            <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. {props.num}</span>
            <span>·</span>
            <span>{props.year}</span>
            </span>
        </div>
        </div>
    </>
  )
}

export default Card