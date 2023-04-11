import React from 'react'

const AnnualPayment = ({ category }) => {
    
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">Annual Payment Plans for {category.category}</h2>
                <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here are some annual payment options that can help you better budget for your memorial plan.</p>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                
                {/* Pricing Card */}
                
                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 className="mb-4 text-2xl font-semibold">One Year</h3>
                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for low interest payment.</p>
                    <div className="flex justify-center items-baseline my-8">
                        <span className="mr-2 text-4xl font-extrabold">&#8369; {category.oneYrPayment.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
                        <span className="text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                    
                    {/* List */}
                    
                    <ul role="list" className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                            
                            {/* Icon */}
                            
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Lowest Monthly Payment</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            
                            {/* Icon */}
                            
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>{category.oneYrInterestPercent} % Interest Rate</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            
                            
                            {/* Icon */}
                            
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Payment Duration: <span className="font-semibold"> 12 months</span></span>
                        </li>
                        
                    </ul>
                    <a href="/paymentForm" className="text-white bg-[var(--primary-btn-600)] hover:bg-[var(--primary-btn-700)] focus:ring-4 focus:ring-[var(--primary-btn-200)] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-[var(--primary-btn-900)]">Get started</a>
                </div>

                {/* Pricing Card */}
                
                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 className="mb-4 text-2xl font-semibold">Two Years</h3>
                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best value for payment with medium interest.</p>
                    <div className="flex justify-center items-baseline my-8">
                        <span className="mr-2 text-4xl font-extrabold">&#8369; {category.twoYrPayment.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
                        <span className="text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                    
                    {/* List */}
                    
                    <ul role="list" className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                            
                            {/* Icon */}
                            
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Lower Monthly Payment</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            
                            {/* Icon */}
                            
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>{category.twoYrInterestPercent} % Interest Rate</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            
                            
                            {/* Icon */}
                            
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Payment Duration: <span className="font-semibold"> 24 months</span></span>
                        </li>
                        
                    </ul>
                    <a href="/paymentForm" className="text-white bg-[var(--primary-btn-600)] hover:bg-[var(--primary-btn-700)] focus:ring-4 focus:ring-[var(--primary-btn-200)] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-[var(--primary-btn-900)]">Get started</a>
                </div>

                {/* Pricing Card */}
                
                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 className="mb-4 text-2xl font-semibold">Three Years</h3>
                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for low payment per month.</p>
                    <div className="flex justify-center items-baseline my-8">
                        <span className="mr-2 text-4xl font-extrabold">&#8369; {category.threeYrPayment.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
                        <span className="text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                    
                    {/* List */}
                    
                    <ul role="list" className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                            
                            {/* Icon */}
                            
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Lowest Monthly Payment</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            
                            {/* Icon */}
                            
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>{category.threeYrInterestPercent} % Interest Rate</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            
                            
                            {/* Icon */}
                            
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Payment Duration: <span className="font-semibold"> 36 months</span></span>
                        </li>
                        
                    </ul>
                    <a href="/paymentForm" className="text-white bg-[var(--primary-btn-600)] hover:bg-[var(--primary-btn-700)] focus:ring-4 focus:ring-[var(--primary-btn-200)] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-[var(--primary-btn-900)]">Get started</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AnnualPayment