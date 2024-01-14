import React, {useId} from 'react'

const Select =  React.forwardRef(function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className='text-base font-medium text-gray-900 '>{label} :</label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={` my-2 px-3 py-2 h-10 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
})

export default Select