import {Injectable} from '@angular/core';

@Injectable()
export class Config {//https://apis.choicegenie.com/choice/
   // public static api: String = 'https://apis.choicegenie.com/choice/';
<<<<<<< HEAD
public static api: String = 'https://apis.choicegenie.com/';
//  public static api: String = 'http://192.168.29.193:9000/choice/';
=======

//public static api: String = 'https://apis.choicegenie.com/';
 //public static api: String = 'http://192.168.29.193:9000/choice/';

 public static api: String = 'https://apis.choicegenie.com/';
// public static api: String = 'http://192.168.30.193:9000/choice/';

>>>>>>> f9798cdc8bece4d5145da96dcfbb9c59656be146
   public static Imageurl: string = 'https://storage.choicegenie.com/media/'; 
    public  static  Imageurlget = 'https://storage.choicegenie.com/images/';  
   public  static  Imageurlupload = 'https://storage.choicegenie.com/upload_image.php';
}