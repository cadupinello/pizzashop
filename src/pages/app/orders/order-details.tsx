import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export const OrderDetails = () => {
  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Pedido: cascaskcnkl13n21kl3nk12l3nk1</DialogTitle>
          <DialogDescription>Detalhes do pedido</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">Status</TableCell>
                <TableCell className="flex justify-end">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                    <span className="text-muted-foreground font-medium">
                      Pendente
                    </span>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">Cliente</TableCell>
                <TableCell className="flex justify-end">
                  Carlos Eduardo
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">
                  Telefone
                </TableCell>
                <TableCell className="flex justify-end">
                  (11) 99999-9999
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">E-mail</TableCell>
                <TableCell className="flex justify-end">
                  carlos.pinello@outlook.com
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">
                  Realizado há
                </TableCell>
                <TableCell className="flex justify-end">Há 1 dia</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead className="text-right">Qtd.</TableHead>
                <TableHead className="text-right">Preço</TableHead>
                <TableHead className="text-right">Subtotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Pizza Pepperoni Pequena</TableCell>
                <TableCell className="text-right">2</TableCell>
                <TableCell className="text-right">R$ 100,00</TableCell>
                <TableCell className="text-right">R$ 200,00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Pizza Mussarela Pequena</TableCell>
                <TableCell className="text-right">2</TableCell>
                <TableCell className="text-right">R$ 60,00</TableCell>
                <TableCell className="text-right">R$ 120,00</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableCell colSpan={3}>Total do pedido</TableCell>
              <TableCell className="text-right font-medium">
                R$ 320,00
              </TableCell>
            </TableFooter>
          </Table>
        </div>
      </DialogContent>
    </>
  )
}
