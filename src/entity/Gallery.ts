import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class Gallery {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    photo: string 

    @Column()
    title: string

    @CreateDateColumn({type: Date})
    createdAt: string 
}