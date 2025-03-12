import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import {
  getManagerRestaurant,
  GetManagerRestaurantResponse,
} from '@/api/get-managed-restaurant'
import { updateProfile } from '@/api/update.profile'

import { Button } from './ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const storeProfileSchema = z.object({
  name: z.string().min(1, 'Informe o nome do seu restaurante'),
  description: z.string().min(1, 'Informe a descrição do seu restaurante'),
})

type StoreProfileForm = z.infer<typeof storeProfileSchema>

export const StoreProfileDialog = () => {
  const queryClient = useQueryClient()

  const { data: managedRestaurant } = useQuery({
    queryFn: getManagerRestaurant,
    queryKey: ['managed-estaurant'],
    staleTime: Infinity,
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StoreProfileForm>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedRestaurant?.name ?? '',
      description: managedRestaurant?.description ?? '',
    },
  })

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    onSuccess: (_, { name, description }) => {
      const cached = queryClient.getQueryData<GetManagerRestaurantResponse>([
        'managed-estaurant',
      ])

      if (cached) {
        queryClient.setQueryData<GetManagerRestaurantResponse>(
          ['managed-estaurant'],
          {
            ...cached,
            name,
            description,
          },
        )
      }
    },
  })

  const handleUpdateProfile = async (data: StoreProfileForm) => {
    try {
      await updateProfileFn({
        name: data.name,
        description: data.description,
      })

      toast.success('Perfil atualizado com sucesso!')
    } catch (error) {
      console.error(error)
      toast.error('Erro ao atualizar perfil, tente novamente.')
    }
  }

  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Perfil da loja</DialogTitle>
          <DialogDescription>
            Atualize as informações do seu estabelecimento visíveis ao seu
            cliente
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(handleUpdateProfile)}>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-right" htmlFor="name">
                Nome
              </label>
              <Input className="col-span-3" id="name" {...register('name')} />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-right" htmlFor="description">
                Descrição
              </label>
              <Textarea
                className="col-span-3"
                id="description"
                {...register('description')}
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost" type="button">
                Cancelar
              </Button>
            </DialogClose>
            <Button variant="success" type="submit" disabled={isSubmitting}>
              Salvar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </>
  )
}
