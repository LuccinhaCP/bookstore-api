import {
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    BeforeInsert,
    BaseEntity,
    Entity,
  } from 'typeorm';
  import * as bcrypt from 'bcryptjs';
  
  @Entity({ name: "users" })
  export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    name: string;
  
    @Column()
    email: string;
  
    @Column()
    password: string;
   
    @BeforeInsert()
    async hashPassword() {
      this.password = await bcrypt.hash(this.password, 10);
    }
  
    async validatePassword(password: string): Promise<boolean> {
      return bcrypt.compare(password, this.password);
    }
    
    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: string;
  
  }