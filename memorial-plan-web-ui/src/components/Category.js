import React from 'react'
import { useNavigate } from 'react-router-dom';

const Category = ({ category, deleteCategory }) => {
  const navigate = useNavigate();
  const editCategory = (e, id) => {
    e.preventDefault();
    navigate(`/updateCategory/${id}`)
  }

  return (
    <tr key={category.id}>
        <td className=' text-left font-normal text-sm text-white py-3 px-6'>{category.category}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.lotPrice}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.vatPercent}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.vat}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.vatLotPrice}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.pcf}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.sellingPrice}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.downpaymentPercent}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.downpayment}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.balancePrice}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.oneYrInterestPercent}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.oneYrInterestRate}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.oneYrContractPrice}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.oneYrPayment}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.twoYrInterestPercent}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.twoYrInterestRate}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.twoYrContractPrice}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.twoYrPayment}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.threeYrInterestPercent}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.threeYrInterestRate}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.threeYrContractPrice}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.threeYrPayment}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.spotCashInterestPercent}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.spotCashPayment}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.thirtyDayInterestPercent}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.thirtyDayPayment}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.sixtyDayInterestPercent}</td>
        <td className=' text-center font-normal text-sm text-white py-3 px-6'>{category.sixtyDayPayment}</td>
        <td className=' text-right font-medium text-sm text-white py-3 px-6'>
            <a 
            className='text-indigo-600 hover:text-green-800 px-4 cursor-pointer'
            onClick={(e, id) => editCategory(e, category.id)}
            >
              Edit
            </a>
            <a 
            className='text-indigo-600 hover:text-red-600 cursor-pointer'
            onClick={(e, id) => deleteCategory(e, category.id)}
            >
              Delete
            </a>
        </td>
    </tr>
  )
}

export default Category