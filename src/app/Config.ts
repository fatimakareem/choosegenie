import {Injectable} from '@angular/core';

@Injectable()
export class Config {//https://apis.choicegenie.com/choice/
   // public static api: String = 'https://apis.choicegenie.com/choice/';
<<<<<<< HEAD
public static api: String = 'https://apis.choicegenie.com/';
 //public static api: String = 'http://192.168.29.193:9000/choice/';
=======
 //public static api: String = 'https://apis.choicegenie.com/';
 public static api: String = 'http://192.168.29.193:9000/choice/';
>>>>>>> d064e1fcc6f7f0a9842b7715e56610f486f4e499
   public static Imageurl: string = 'https://storage.choicegenie.com/media/'; 
    public  static  Imageurlget = 'https://storage.choicegenie.com/images/';  
   public  static  Imageurlupload = 'https://storage.choicegenie.com/upload_image.php';
}