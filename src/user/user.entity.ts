import { Entity, Column } from 'typeorm';
import { Base } from 'sd-nest-base';

@Entity()
export class User extends Base {
    @Column()
    pwd: string;
}
