import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    try {
      const transation = await transactionsRepository.findOneOrFail(id);
      await transactionsRepository.remove(transation);
    } catch {
      throw new AppError('Transaction does not exist');
    }
  }
}

export default DeleteTransactionService;
