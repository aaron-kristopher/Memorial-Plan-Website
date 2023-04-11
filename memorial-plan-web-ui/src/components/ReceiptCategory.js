import React from 'react'

const ReceiptCategory = ({ category, values }) => {
    

  return (
    <>
        {values.categories===category.category &&
        <div className='text-gray-800'>
            <div className='after:block after:h-[1px] after:my-10 after:bg-gray-500'>
                <div className='my-10'>
                    <p className='text-4xl font-bold'><span className='uppercase'>{category.category}</span> ({values.payment})</p>
                </div>
                <div className='justify-between flex font-bold text-3xl text-gray-700 my-6 px-8'>
                    <span className=''>Description</span>
                    <span className=''>Amount</span>
                </div>
                <div className='flex justify-between px-8'>
                    <div className=' text-2xl'>
                        <p className='py-2'>Lot Price:</p>
                        <p className='py-2'>VAT ({category.vatPercent}):</p>
                        <p className='py-2'>Lot Price (VAT):</p>
                        <p className='py-2'>PCF</p>
                        <p className='py-2'>Selling Price:</p>
                        <p className='py-2'>Downpayment ({category.downpaymentPercent})</p>
                        <p className='py-2'>Balance Price:</p>
                    </div>
                    <div className='text-end text-2xl'>
                        <p className='py-2'>&#8369; {category.lotPrice.toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
                        <p className='py-2'>&#8369; {category.vat.toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
                        <p className='py-2'>&#8369; {category.vatLotPrice.toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
                        <p className='py-2'>&#8369; {category.pcf.toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
                        <p className='py-2'>&#8369; {category.sellingPrice.toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
                        <p className='py-2'>&#8369; {category.downpayment.toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
                        <p className='py-2'>&#8369; {category.balancePrice.toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
                    </div>
                </div>
            </div>
            <div className='after:block after:h-[1px] after:my-10 after:bg-gray-500'>
                <div className='flex justify-between text-2xl px-8'>
                    <div className=''>
                        {(values.payment==='Spot Cash' || values.payment==='Thirty Day' || values.payment==='Sixty Day') 
                        &&  <>
                                <p className='py-2'>Less:</p>
                            </>}
                        {(values.payment==='One Year Installment' || values.payment==='Two Years Installment' || values.payment==='Three Years Installment') 
                        &&  <>
                                <p className='py-2'>Interest (<span>
                                                {(values.payment==='One Year Installment') && category.oneYrInterestPercent}
                                                {(values.payment==='Two Years Installment') && category.twoYrInterestPercent}
                                                {(values.payment==='Three Years Installment') && category.threeYrInterestPercent}
                                            </span>%):</p>
                        </>}
                        <p className='py-2'>{values.payment}:</p>
                    </div>
                    <div className='text-end'>
                        {values.payment==='One Year Installment'
                        &&  <>
                                <p className='py-2'>&#8369; {category.oneYrInterestRate.toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
                                <p className='py-2'>&#8369; {category.oneYrPayment.toLocaleString('en-US', {minimumFractionDigits: 2})} <span className='text-gray-500 text-xl'>/ month</span></p>
                            </>}
                        {values.payment==='Two Years Installment'
                        &&  <>
                                <p className='py-2'>&#8369; {category.twoYrInterestRate.toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
                                <p className='py-2'>&#8369; {category.twoYrPayment.toLocaleString('en-US', {minimumFractionDigits: 2})} <span className='text-gray-500 text-xl'>/ month</span></p>
                            </>}
                        {values.payment==='Three Years Installment'
                        &&  <>
                                <p className='py-2'>&#8369; {category.threeYrInterestRate.toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
                                <p className='py-2'>&#8369; {category.threeYrPayment.toLocaleString('en-US', {minimumFractionDigits: 2})} <span className='text-gray-500 text-xl'>/ month</span></p>
                            </>}
                        {values.payment==='Spot Cash'
                        &&  <>
                                <p className=''>&#8369; {((category.sellingPrice) * (category.spotCashInterestPercent / 100)).toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
                                <p className='py-2'>&#8369; {category.spotCashPayment.toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
                            </>}
                        {values.payment==='Thirty Days'
                        &&  <>
                                <p className=''>&#8369; {((category.sellingPrice) * (category.thirtyDayInterestPercent / 100)).toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
                                <p className='py-2'>&#8369; {category.thirtyDayPayment.toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
                            </>}
                        {values.payment==='Sixty Days'
                        &&  <>
                                <p className=''>&#8369; {((category.sellingPrice) * (category.sixtyDayInterestPercent / 100)).toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
                                <p className='py-2'>&#8369; {category.sixtyDayPayment.toLocaleString('en-US', {minimumFractionDigits: 2})}</p>
                            </>}
                    </div>
                </div>
            </div>
            <div>
                <div className='text-lg text-gray-500 text-end'>
                    <p>Invoice ID: 42069420</p>
                </div>
            </div>
        </div>
        }
    </>
  )
}

export default ReceiptCategory