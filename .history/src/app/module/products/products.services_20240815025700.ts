import { SortOrder } from 'mongoose'
import { IGenericResponse } from '../../../interface/common'
import { IPaginationOptions } from '../../../interface/pagination.interface'
import { paginationHelpers } from '../../../shared/paginationHelpers'
import { ProductSearchableFiled } from './products.constants'
import { IProduct, IProductFilter } from './products.interface'
import { Product } from './products.models'

const createProduct = async (payload: IProduct) => {
  const result = await Product.create(payload)
  return result
}

const getSingleProduct = async (id: string) => {
  const result = await Product.findById(id)
  return result
}

// get all products and create pagination filtering sorting and
//searching along with this service

const getAllProducts = async(
  filters: IProductFilter,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IProduct[]>> => {
  const { searchTerm, ...filtersData } = filters

  // implement search functionalities ;

  const searchAndPaginationCondition = []

  if (searchTerm) {
    searchAndPaginationCondition.push({
      $or: ProductSearchableFiled.map(field => ({
        [field]: {
          regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }

  // filter logic using mongoose aggregation
  if (Object.keys(filtersData).length) {
    searchAndPaginationCondition.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    })
  }
  //logic for pagination
  const {
    page = 1,
    limit = 10,
    skip,
    sortBy,
    sortOrder,
  } = paginationHelpers.calculatePagination(paginationOptions)

  // sorting with mongoose aggreegation
  const sortCondition: { [key: string]: SortOrder } = {}
  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder
  }
  //if got any rejection without filtering and sorting api and this is holding all logics here
  const whereCondition =
    searchAndPaginationCondition.length > 0
      ? { $and: searchAndPaginationCondition }
      : {};
  
  const result = await Product.find(whereCondition).sort(sortCondition).skip(skip).limit(limit)
  
  const total = await Product.countDocuments();

  return {
    meta: {
      page, 
      limit,
      total
    },
    data: result
  }
}


const updateProduct = async (id:string, payload:Partial<IProduct>) : Promise<IProduct | null>  => {
  const result = await Product.findOneAndUpdate({ _id: id }, payload, { new: true });
  return result;
}
export const ProductServices = {
  createProduct,
  getSingleProduct,
  getAllProducts,
  updateProduct
}
