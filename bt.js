//dao nguoi chuoi
String.prototype.reverse =function(){
     var s ='',L = this.length;
     while(L){console.log('so luong tu trong 1 chuoi' +s1.length);
         s+= this[--L];
     }
     return s;
 }
 var s1='lkjhgfdsa';
 var s2 = 'uiiuuehdw';
 console.log("chuoi dao la:" + s1.reverse()); 
 console.log("chuoi dao la:" + s2.reverse());
//dem so ky tu chuoi
console.log('so ky tu cua chuoi:' + s1.length);
console.log('so ky tu cua chuoi:' + s2.length);
