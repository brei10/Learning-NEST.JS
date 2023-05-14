import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';




export const BRANDS_SEED: Brand[] = [
    {
        id: uuid(),
        name: 'HONDA',
        createdAt: new Date().getTime()
    },

]