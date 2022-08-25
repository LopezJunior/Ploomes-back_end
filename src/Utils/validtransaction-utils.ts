import { User } from 'src/User/entities/user.entity';

export async function ValidTransaction(user: User) {
  const cardPrice = user.room.price;
  
  if (user.wallet < cardPrice) {
    return false;
  } else {
    return true;
  }
}
