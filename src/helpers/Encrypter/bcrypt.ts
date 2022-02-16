import {Encrypter} from './types'
import bcrypt from 'bcrypt';

class Criptografia implements Encrypter {
    encrypt(value: string): string{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(value, salt);
        return hash
    }
    compare(valueToCompare: string, originalEncripted: string): boolean{
        
    }
}