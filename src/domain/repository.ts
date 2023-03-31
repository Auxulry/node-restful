import { Repository, SelectQueryBuilder } from 'typeorm';

export class BaseRepository<T> extends Repository<T> {
  constructor(protected readonly repository: Repository<T>) {
    super(repository.target, repository.manager);
  }

  async findById(id: string): Promise<T> {
    const queryBuilder: SelectQueryBuilder<T> = this.repository.createQueryBuilder('entity');
    return await queryBuilder.where('entity.id = :id', { id }).getOne();
  }

  async findByEmail(email: string): Promise<T> {
    const queryBuilder: SelectQueryBuilder<T> = this.repository.createQueryBuilder('entity');
    return await queryBuilder.where('entity.email = :email', { email }).getOne();
  }
}