import {Injectable} from '@angular/core';

@Injectable()
export class Config {//https://apis.choicegenie.com/choice/
   // public static api: String = 'https://apis.choicegenie.com/choice/';
public static api: String = 'https://apis.choicegenie.com/';
//  public static api: String = 'http://192.168.29.193:9000/choice/';
<<<<<<< HEAD
=======
 
>>>>>>> a5609c6f54df39cc80360ff4b08fdcb2ea106fe1
   public static Imageurl: string = 'https://storage.choicegenie.com/media/'; 
    public  static  Imageurlget = 'https://storage.choicegenie.com/images/';  
   public  static  Imageurlupload = 'https://storage.choicegenie.com/upload_image.php';
}