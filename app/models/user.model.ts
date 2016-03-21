import {Picture} from './picture.model.ts'

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    pictures: Picture[];
}