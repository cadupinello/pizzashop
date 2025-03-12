import { api } from '@/lib/axios'

interface UpdateProfileForm {
  name: string
  description: string | null
}

export async function updateProfile({ name, description }: UpdateProfileForm) {
  await api.put('/profile', { name, description })
}
