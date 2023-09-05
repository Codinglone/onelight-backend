import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Gallery {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    photo: string 

    @Column()
    title: string
}