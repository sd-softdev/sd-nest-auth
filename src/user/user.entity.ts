import { Base } from 'sd-nest-base';
import { Entity, Column } from 'typeorm';

@Entity()
export class User extends Base {
    @Column()
    pwd: string;
}
