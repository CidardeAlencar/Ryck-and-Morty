import React from 'react'
import { CategoryProductRow } from './CategoryProductRow'
import '../style/productTable.css'

function ProductTable() {
  return (
    <div>
        <div className='product-table_header'>
            <span>Rick&Morty</span>
        </div>
        <div className='product-table_categories'>
                <CategoryProductRow/>
                <CategoryProductRow/>
        </div>
    </div>
  )
}

export { ProductTable}