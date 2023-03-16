
import MOCK_GOODS from '../data'

// async mock products data
const getProducts = async () => new Promise((resolve) => {
   setTimeout(() => resolve(MOCK_GOODS), 2000)
})

export default getProducts