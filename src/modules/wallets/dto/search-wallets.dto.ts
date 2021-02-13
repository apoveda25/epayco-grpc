import { WalletDocument } from '../entities/wallet.entity';

export interface SearchWalletsDto {
  wallets: WalletDocument[];
}
