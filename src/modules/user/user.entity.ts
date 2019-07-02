import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { unique: true })
    username: string;

    @Column('longtext', { nullable: true })
    @Exclude()
    password: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    async comparePassword(password: string) {
        console.log(password, this.password)
        return await bcrypt.compare(password, this.password);
    }
}