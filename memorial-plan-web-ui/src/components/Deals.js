import React, { useEffect, useState } from 'react'
import CategoryService from '../services/CategoryService';
import PaymentTabs from './PaymentTabs';

const Deals = () => {

    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState(null);
    const [show, setShow] = useState(0)

    useEffect(() => {
      const fectchData = async () => {
        setLoading(true);
        try {
            const response = await CategoryService.getCategories();
            setCategories(response.data);
        } catch(error) {
            console.log(error);
        }
        setLoading(false);
      };
      fectchData();
    }, [])

    return (

        <>        
        {!loading && (
            <div className='max-w-[1140px] mt-4 m-auto w-full flex flex-wrap gap-x-10 gap-y-7 items-center justify-center z-30'>

                {categories.map((category) => (

                    <>
                        <div className={`card border border-gray-600 shadow-lg 
                        ${ show===category.id ? 'min-w-[320px] margin mx-[50%]' : '' }`}>
                            <img src={`/images/${category.category}.jpg`} alt='{category.category}'
                                className='w-full h-full object-cover' />
                            <div className='dark:bg-gray-800 p-5 flex flex-col gap-3'>

                                {/* product title */}

                                <h2 className='product-title font-black' title='Category'>
                                    {category.category}
                                </h2>

                                {/* product price */}

                                <div>
                                    <span className='text-xl font-semibold'>
                                        Balance: <span className='font-bold text-2xl'> &#8369; {category.balancePrice.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
                                    </span>
                                    <div className='flex items-center gap-2 mt-1'>
                                        <span className='text-sm opacity-75 text-gray-400'>
                                            Price: &#8369; {category.sellingPrice.toLocaleString('en-US', {minimumFractionDigits: 2})}
                                        </span>
                                        <span className='downpayment-percent'>
                                            DP {category.downpaymentPercent}%
                                        </span>
                                    </div>
                                </div>

                                {/* category action button */}

                                <div className='mt-5 flex flex-col mx-w-lg'>
                                    <button 
                                        onClick={() => {
                                            show!==(category.id)
                                            ? setShow(category.id)
                                            : setShow(0)
                                        }}
                                        className='text-white bg-[var(--primary-btn-600)] hover:bg-[var(--primary-btn-700)] focus:ring-4 focus:ring-[var(--primary-btn-200)] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-[var(--primary-btn-900)]'>
                                            { show!==category.id ? 'Show Payment' : 'Hide Payment' }
                                    </button>
                                </div>
                            </div>
                        </div>

                    { show===category.id && <PaymentTabs category={ category } ></PaymentTabs> }
                    
                </>

                ))} 
            </div>)}

        </>
    )
}

export default Deals