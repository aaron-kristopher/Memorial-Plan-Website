import React, { useEffect, useState } from 'react'
import CategoryService from '../services/CategoryService';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Receipt from './Receipt';

const PaymentForm = () => {

    const formik = useFormik({
        initialValues: {
            name:'',
            email: "",
            cardNumber: "",
            categories: "Regular",
            payment: "One Year Installment",
        },

        validationSchema: Yup.object({
            name: Yup.string()
                    .max(20, 'Name must  be 20 characters or less')
                    .required('Name is required'),
            email: Yup.string()
                    .email('Invalid email address')
                    .required('Email is required'),
            cardNumber: Yup.number()
                    .min(13, 'Card Number must be 19 digits or less')
                    .max(19, 'Card Number must be 19 digits or less')
                    .required('Card Number is required'),
        }),    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsFormVisible(false);

    }


    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState(null);
    const [isFormVisible, setIsFormVisible] = useState(true);

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
    {isFormVisible ? (
    <main className='h-screen flex items-center justify-center my-10 py-10'>
        <form onSubmit={handleSubmit} className='bg-white flex rounded-lg w-3/4'>
            <div className='flex-1 text-white p-20 bg-gray-800 border border-gray-100 rounded-lg'>
                <h1 className='text-3xl pb-2 font-bold'>Let's get started 🖐 </h1>
                <p className='text-lg'>
                    Thank you for choosing Libing Things. Please choose the category 
                    and payment method you wish to proceed with for your memorial plan.
                </p>
                <div className='mt-6 text-gray-800'>

                    {/* name input field */}

                    <div className='pb-4'>
                        
                        <label className={`text-white block font-bold text-sm pb-2 
                        ${formik.touched.name && formik.errors.name ? 'text-red-400' : ''}`} 
                                htmlFor='name'
                        >
                            {formik.touched.name && formik.errors.name ? formik.errors.name : "Name"}
                        </label>
                        
                        <input className='border-2 border-gray-100 p-2 rounded-lg w-2/5 focus:border-teal-500 focus:ring-teal-500' 
                                type='text'
                                name='name' 
                                placeholder='Enter your Name' 
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                
                                
                        />
                    </div>

                    {/* email field */}

                    <div className='pb-4'>
                    <label className={`text-white block font-bold text-sm pb-2 
                        ${formik.touched.email && formik.errors.email ? 'text-red-400' : ''}`} 
                                htmlFor='name'
                        >
                            {formik.touched.email && formik.errors.email ? formik.errors.email : "Email"}
                        </label>
                        <input className='border-2 border-gray-100 p-2 rounded-lg w-2/5 focus:border-teal-500 focus:ring-teal-500' 
                                type='email' 
                                name='email' 
                                placeholder='Enter your Email' 
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                        />
                    </div>

                    {/* card number field */}

                    <div className='pb-4'>
                    <label className={`text-white block font-bold text-sm pb-2 
                        ${formik.touched.cardNumber && formik.errors.cardNumber ? 'text-red-400' : ''}`} 
                                htmlFor='name'
                        >
                           Card Number
                        </label>
                        <input className='border-2 border-gray-100 p-2 rounded-lg w-2/5 focus:border-teal-500 focus:ring-teal-500' 
                                type='tel' 
                                autoComplete='cc-number'
                                placeholder='xxxx xxxx xxxx xxxx'
                                name='cardNumber' 
                                value={formik.values.cardNumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                        />
                    </div>

                    {/* category field */}

                    {!loading && (
                    <div className='pb-4'>
                        <label className='text-white block font-bold text-sm pb-2' 
                                htmlFor='name'
                        >
                            Category
                        </label>

                        
                        <select className='border-2 border-gray-100 p-2 rounded-lg w-2/5 focus:border-teal-500 focus:ring-teal-500'
                                name='categories'
                                placeholder='Category'
                                value={formik.values.categories}
                                onChange={formik.handleChange}>
                            {categories.map((category) => (
                                <option className='text-gray-500 border-2 border-gray-100 p-2 rounded-lg w-2/5 focus:border-teal-500 focus:ring-teal-500'>{category.category}</option>
                            ))}
                        </select> 
                    </div> )}

                    {/* payment type field */}

                    <div className='pb-4'>
                        <label className='text-white block font-bold text-sm pb-2' 
                                htmlFor='name'
                        >
                            Payment Type
                        </label>

                        <select className='border-2 border-gray-100 p-2 rounded-lg w-2/5 focus:border-teal-500 focus:ring-teal-500'
                                name='payment'
                                placeholder='Payment'
                                value={formik.values.payment}
                                onChange={formik.handleChange}>
                            <option>One Year Installment</option>
                            <option>Two Years Installment</option>
                            <option>Three Years Installment</option>
                            <option>Spot Cash</option>
                            <option>Thirty Days</option>
                            <option>Sixty Days</option>
                        </select>
                    </div>
                </div>
                <button type='submit'
                    className="text-white bg-[var(--primary-btn-600)] hover:bg-[var(--primary-btn-700)] focus:ring-4 focus:ring-[var(--primary-btn-200)] font-medium rounded-lg text-sm px-5 py-3 text-center w-3/4 mt-6">
                        Submit
                </button>
            </div>
        </form>
    </main>) :
    (<Receipt values={formik.values} categories={categories} />)}
    </>
  )
}

export default PaymentForm