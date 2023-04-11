import React from 'react'
import ReceiptCategory from './ReceiptCategory';

const Receipt = ({ values, categories }) => {

    console.log(values);

  return (
    <>
        <div className='m-20 h-full flex bg-gray-800'>
            <div className='flex-2 justify-evenly text-white py-8 px-6'>
                <div className='py-14 px-10 after:block after:h-[1px] after:mt-8 after:bg-white after:min-w-[245px]'>
                    <div className='flex align-top'>
                        <p>
                            <span className='block mb-2 text-base'>Name</span>
                            <span className='text-3xl'>{values.name}</span>
                        </p>
                    </div>
                </div>
                <div className='py-14 px-10 after:block after:h-[1px] after:mt-8 after:bg-white after:min-w-[245px]'>
                    <div className='flex align-top'>
                        <p>
                            <span className='block mb-2 text-sm'> Category</span>
                            <span className='text-xl'>{values.categories}</span>
                        </p>
                    </div>
                </div>
                <div className='py-14 px-10 after:block after:h-[1px] after:mt-8 after:bg-white after:min-w-[245px]'>
                    <div className='flex align-top'>
                        <p>
                            <span className='block mb-2 text-sm'>Payment</span>
                            <span className='text-xl'>{values.payment}</span>
                        </p>
                    </div>
                </div>
                <div className='py-14 px-10 after:block after:h-[1px] after:mt-8 after:bg-white after:min-w-[245px]'>
                    <div className='flex align-top'>
                        <p>
                            <span className='block mb-2 text-sm'>Email</span>
                            <span className='text-xl'>
                               {values.email}
                            </span>
                        </p>
                    </div>
                </div>
                <div className='py-14 px-10'>
                    <div className='flex align-top'>
                        <p>
                            <span className='block mb-2 text-sm'>Card Number</span>
                            <span className='text-xl'>{values.cardNumber}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex-1 bg-white p-10 space-between'>
                <div className=''>
                    <div>
                        <span className='basis-full text-gray-800 text-4xl font-bold after:block after:h-[1px] after:mt-4 after:bg-gray-500'>Libing Things</span>
                    </div>
                </div>
                <div className=''>
                {categories.map((category) => (
                        <ReceiptCategory category={ category } values={values}></ReceiptCategory>
                    ))
                }
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Receipt