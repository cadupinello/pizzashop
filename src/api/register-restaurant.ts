import { api } from '@/lib/axios'

export interface RegisterRestaurantForm {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterRestaurantForm) {
  await api.post('/restaurants', {
    restaurantName,
    managerName,
    email,
    phone,
  })
}
