import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CategoryService from '../services/CategoryService';
import Category from './Category';

const CategoryList = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState(null);

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
    
    const deleteCategory = (e, id) => {
        e.preventDefault();
        CategoryService.deleteCategory(id).then((res) => {
            if(categories) {
                setCategories((prevElement) => {
                    return prevElement.filter((category) => category.id !== id);
                });
            }
        })
    }

  return (
    <>
        <div className='container mx-auto my-8 overflow-auto'>
            <div className='h-12'>
                <button 
                className='rounded bg-slate-600 text-white px-6 py-2 font-semibold text'
                onClick={() => navigate('/addCategory')}>
                    Add Category
                </button>
            </div>
            <div className='shadow border-b'>
                <table className='w-full text-sm'>
                    <thead className='bg-gray-50 whitespace-nowrap'>
                        <tr>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>Category</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>Lot Price</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>VAT %</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>VAT</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>Lot Price (VAT)</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>PCF</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>Selling Price</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>Downpayment %</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>Downpayment</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>Balance Price</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>1 Year Int %</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>1 Year Int</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>1 Year Contract Price</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>1 Year Payment</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>2 Year Int %</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>2 Year Int</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>2 Year Contract Price</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>2 Year Payment</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>3 Year Int %</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>3 Year Int</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>3 Year Contract Price</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>3 Year Payment</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>Spot Cash %</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>Spot Cash Payment</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>Thirty Day %</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>Thirty Day Payment</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>Sixty Day %</th>
                            <th className=' text-left font-bold text-gray-500 uppercase py-3 px-6'>Sixty Day Payment</th>
                            <th className=' text-right font-bold text-gray-500 uppercase py-3 px-6'>Actions</th>
                        </tr>
                    </thead>
                    {!loading && (
                    <tbody>
                        {categories.map((category) => (
                            <Category category={category} deleteCategory={deleteCategory} key={category.id}></Category>
                        ))}
                    </tbody> )}
                </table>
            </div>
        </div>
    </>
  )
}

export default CategoryList