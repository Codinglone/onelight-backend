import { Entity ,PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class News {

    @PrimaryGeneratedColumn("uuid")
    id: string 

    @Column()
    title: string 

    @Column()
    body: string 

    @Column()
    photo: string 

    @CreateDateColumn({type: Date})
    createdAt: string

    @UpdateDateColumn({type: Date})
    updatedAt: string
}