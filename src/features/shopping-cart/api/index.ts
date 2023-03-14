
import MOCK_GOODS from '../data'

const getItemsList = async () => new Promise((resolve) => {
   setTimeout(() => resolve(MOCK_GOODS), 2000)
})

export default getItemsList