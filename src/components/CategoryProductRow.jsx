import React from 'react'
import { ProductRow } from './ProductRow'
import '../style/CategoryProductRow.css'

function CategoryProductRow() {
    const title='Electronics'
  return (
    <div className='category-conteiner'>
        <div className='category-title'>
            {
                title
            }
        </div>
        <div className='category-body'>
            <ProductRow/>
            <ProductRow/>
            <ProductRow/>
        </div>
    </div>
  )
}

export {CategoryProductRow}