import { id_ID } from 'faker/lib/locales'
import productlist from '../productAPI'

const sportlist=[]
const electronicslist=[]

    console.log ("product: ", productlist)
    for (let index=0;index<productlist.length;index++){
        productlist.map((product)=>{
            if(product.category=== 'sports'){
                sportlist.push(product)
    
            }else{
                electronicslist.push(product)
            }
        }
        )
    /*productlist.map((product)=>{
        if(product.category=== 'sports'){
            sportlist.push(product)

        }else{
            electronicslist.push(product)
        }
    }
    )*/
}

export {sportlist,electronicslist}