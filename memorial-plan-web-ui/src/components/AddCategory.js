import React, { useState } from 'react'
import CategoryService from '../services/CategoryService';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {

    const [category, setCategory] = useState({
        "id": "",
        "category": "",
        "lotPrice": "",
        "vatPercent": "",
        "vat": "",
        "vatLotPrice": "",
        "pcf": "",
        "sellingPrice": "",
        "downpaymentPercent": "",
        "downpayment": "",
        "balancePrice": "",
        "oneYrInterestPercent": "",
        "oneYrInterestRate": "",
        "oneYrContractPrice": "",
        "oneYrPayment": "",
        "twoYrInterestPercent": "",
        "twoYrInterestRate": "",
        "twoYrContractPrice": "",
        "twoYrPayment": "",
        "threeYrInterestPercent": "",
        "threeYrInterestRate": "",
        "threeYrContractPrice": "",
        "threeYrPayment": "",
        "spotCashInterestPercent": "",
        "spotCashPayment": "",
        "thirtyDayInterestPercent": "",
        "thirtyDayPayment": "",
        "sixtyDayInterestPercent": "",
        "sixtyDayPayment": ""
    }
);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;

        setCategory({ ...category, [e.target.name]: !isNaN(value) ? parseFloat(value) : value});
    }

    const saveCategory = (e) => {
        category.vat = (category.vatPercent / 100) * category.lotPrice;
        category.vatLotPrice = category.vat + category.lotPrice;
        category.sellingPrice = category.vatLotPrice + category.pcf;
        category.downpayment = category.sellingPrice * (category.downpaymentPercent / 100);
        category.balancePrice = category.sellingPrice - category.downpayment;
        category.oneYrInterestRate = category.balancePrice * (category.oneYrInterestPercent / 100);
        category.oneYrContractPrice = category.sellingPrice + category.oneYrInterestRate;
        category.oneYrPayment = (category.balancePrice + category.oneYrInterestRate) / 12; 
        category.twoYrInterestRate = category.balancePrice * (category.twoYrInterestPercent / 100);
        category.twoYrContractPrice = category.sellingPrice + category.twoYrInterestRate;
        category.twoYrPayment = (category.balancePrice + category.twoYrInterestRate) / 24; 
        category.threeYrInterestRate = category.balancePrice * (category.threeYrInterestPercent / 100);
        category.threeYrContractPrice = category.sellingPrice + category.threeYrInterestRate;
        category.threeYrPayment = (category.balancePrice + category.threeYrInterestRate) / 36;
        category.spotCashPayment = category.sellingPrice - (category.sellingPrice) * (category.spotCashInterestPercent / 100) 
        category.thirtyDayPayment = category.sellingPrice - (category.sellingPrice) * (category.thirtyDayInterestPercent / 100) 
        category.sixtyDayPayment = category.sellingPrice - (category.sellingPrice) * (category.sixtyDayInterestPercent / 100) 
        
        e.preventDefault();
        CategoryService.saveCategory(category).then((response) => {
            navigate('/categoryList');
        }).catch((error) => {
            console.log(error);
        })
    }

    const reset = (e) => {
        e.preventDefault();
        setCategory({
            "id": "",
        "category": "",
        "lotPrice": "",
        "vatPercent": "",
        "vat": "",
        "vatLotPrice": "",
        "pcf": "",
        "sellingPrice": "",
        "downpaymentPercent": "",
        "downpayment": "",
        "balancePrice": "",
        "oneYrInterestPercent": "",
        "oneYrInterestRate": "",
        "oneYrContractPrice": "",
        "oneYrPayment": "",
        "twoYrInterestPercent": "",
        "twoYrInterestRate": "",
        "twoYrContractPrice": "",
        "twoYrPayment": "",
        "threeYrInterestPercent": "",
        "threeYrInterestRate": "",
        "threeYrContractPrice": "",
        "threeYrPayment": "",
        "spotCashInterestPercent": "",
        "spotCashPayment": "",
        "thirtyDayInterestPercent": "",
        "thirtyDayPayment": "",
        "sixtyDayInterestPercent": "",
        "sixtyDayPayment": ""
        })
    }

  return (
    <div className='flex max-w-2xl mx-auto shadow border-b my-10'>
        <div className='px-8 py-8 space-y-8'>
            <div className='font-thin text-2xl text-white tracking-wider'>
                <h1>Add New Category</h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-white text-sm font-normal'>
                    Category
                </label>
                <input 
                name='category'
                value={category.category}
                onChange={(e) => handleChange(e)}
                type='text'
                className='h-1"" w-96 border mt-2 p-2' ></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-white text-sm font-normal'>
                    Lot Price
                </label>
                <input 
                name='lotPrice'
                value={category.lotPrice}
                onChange={(e) => handleChange(e)}
                type='number'
                className='h-1"" w-96 border mt-2 p-2' ></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-white text-sm font-normal'>
                    VAT Percent
                </label>
                <input 
                name='vatPercent'
                value={category.vatPercent}
                onChange={(e) => handleChange(e)}
                type='number'
                className='h-1"" w-96 border mt-2 p-2' ></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-white text-sm font-normal'>
                    Petty Cash Fund
                </label>
                <input 
                name='pcf'
                value={category.pcf}
                onChange={(e) => handleChange(e)}
                type='number'
                className='h-1"" w-96 border mt-2 p-2' ></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-white text-sm font-normal'>
                    Downpayment Percent
                </label>
                <input 
                name='downpaymentPercent'
                value={category.downpaymentPercent}
                onChange={(e) => handleChange(e)}
                type='number'
                className='h-1"" w-96 border mt-2 p-2' ></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-white text-sm font-normal'>
                    1 Year Interest Percent
                </label>
                <input 
                name='oneYrInterestPercent'
                value={category.oneYrInterestPercent}
                onChange={(e) => handleChange(e)}
                type='number'
                className='h-1"" w-96 border mt-2 p-2' ></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-white text-sm font-normal'>
                    2 Year Interest Percent
                </label>
                <input 
                name='twoYrInterestPercent'
                value={category.twoYrInterestPercent}
                onChange={(e) => handleChange(e)}
                type='number'
                className='h-1"" w-96 border mt-2 p-2' ></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-white text-sm font-normal'>
                    3 Year Interest Percent
                </label>
                <input 
                name='threeYrInterestPercent'
                value={category.threeYrInterestPercent}
                onChange={(e) => handleChange(e)}
                type='text'
                className='h-1"" w-96 border mt-2 p-2' ></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-white text-sm font-normal'>
                    Spot Cash Interest Percent
                </label>
                <input 
                name='spotCashInterestPercent'
                value={category.spotCashInterestPercent}
                onChange={(e) => handleChange(e)}
                type='number'
                className='h-1"" w-96 border mt-2 p-2' ></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-white text-sm font-normal'>
                    30 Day Interest Percent
                </label>
                <input 
                name='thirtyDayInterestPercent'
                value={category.thirtyDayInterestPercent}
                onChange={(e) => handleChange(e)}
                type='number'
                className='h-1"" w-96 border mt-2 p-2' ></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-white text-sm font-normal'>
                    60 Day Interest Percent
                </label>
                <input 
                name='sixtyDayInterestPercent'
                value={category.sixtyDayInterestPercent}
                onChange={(e) => handleChange(e)}
                type='text'
                className='h-1"" w-96 border mt-2 p-2' ></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4 space-y-4'>
                <button 
                className='rounded text-white font-semibold bg-green-400 px-4 py-2 hover:bg-green-700'
                onClick={saveCategory}>
                    Save
                </button>
                <button 
                className='rounded text-white font-semibold bg-red-400 px-4 py-2 hover:bg-red-700'
                onClick={reset}>
                    Clear
                </button>
            </div>
        </div>
    </div>
  )
}

export default AddCategory