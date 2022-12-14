import Swal from 'sweetalert2'
import pankaj from '../Image/pankaj.jpg';
import santa from '../Image/santa.jpg';

export const showSuccessAlert  = (message) => {
    let image_url;
    if(message==='You very chalank bro!'){
        image_url=pankaj
    }
    else{
        image_url=santa;
    }
    Swal.fire({
       
        html: message,
        position: 'bottom',
        imageUrl: image_url,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        
    })
}