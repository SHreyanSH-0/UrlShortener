import { nanoid } from 'nanoid';

import Url from "../Model/Url.js";

const tailGenerator = async () => {
    const tail = nanoid(8);
    while(true){
        const existingUrl = await Url.findOne({ tail });
        if (!existingUrl) {
            break;
        }
        else{
            tail = nanoid(8);
        }
    }
    return tail;
}

export default tailGenerator;