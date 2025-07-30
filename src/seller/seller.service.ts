import { Injectable } from '@nestjs/common';
import { SellerDTO } from './seller.dto';


@Injectable()
export class SellerService {

  addSeller(sellerData: SellerDTO): SellerDTO {
    return sellerData; 
  }
 getAllSellers(): SellerDTO {
    return ;
  }

  updateSeller(sellerData: SellerDTO): SellerDTO {
    return sellerData; 
  }

  deleteSeller(): { message: string } {
    return { message: 'deleted seller)' };
  }
}
  

