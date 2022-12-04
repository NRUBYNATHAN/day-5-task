//1.Print odd numbers in an array

//ANONYMOUS FUNCTION;

var a = [1,2,3,4,5,7,8,9];
var odd = function(a){
    var result = [];
    for(var i = 0;i<a.length;i++){
        if(a[i]%2!=0){
            result.push(a[i])
        }
    }
    return result
}
console.log(odd(a))

//------------------------------------------------------

//IIFE FUNCTION 

(function odd(a)
{
    var result=[];
    for(var  i = 0;i<a.length;i++){
        if(a[i]%2!=0){
            result.push (a[i])}
         }
    console.log(result)
})
([1,2,3,4,5,6])

//---------------------------------------------------------

 //ARROW FUNCTION;

var odd =(arr)=>{
    var result=[];
    for(var i = 0;i<arr.length;i++){
        if(arr[i]%2!==0){
            result.push(arr[i])
        }
    }
    return result
}
console.log(odd([1,2,3,4,5,6,7]))

//------------------------------------------------------------

//2.Convert all the strings to title caps in a string array;

//ANONYMOUS FUNCTION;

var a = "geeks";
var all = function (a){
    a = a.toLowerCase().split(' ');
    for(var i = 0;i<a.length;i++){
        a[i]=a[i].charAt(0).toUpperCase()+a[i].slice(1)
    }
    return a.join(" ")
}
console.log(all(a))

//------------------------------------------------------ 

//IIFE

(function odd (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
       console.log(str.join(" "))
  })
  (("geeks"))

  //-----------------------------------------------------
  
  // ARROW FUNCTION;

  var amma = (a)=>{
    a=a.toLowerCase().split(" ")
    for(var i = 0;i<a.length;i++){
        a[i]=a[i].charAt(0).toUpperCase()+a[i].slice(1)
    }
    return a.join(" ")
  }
  console.log(amma("geeks"))


//------------------------------------------------------------------


//3.Sum of all numbers in an array

//ANONYMOUS FUNCTION;


var a = [1,2,3,4,5,6]
var add = function(a){
    let sum = 0;
    for(var i = 0;i<a.length;i++){
        sum= sum+a[i];
    }
    return sum
}
console.log(add(a))


//---------------------------------------------------------------------

//IIFE FUNCTION

(function add (a){
    let sum = 0;
    for(var i = 0;i<a.length;i++){
        sum= sum+a[i]
    }
    console.log(sum)
})
([1,2,3,4,5,6])


//------------------------------------------------------------------------

//ARROW FUNCTION;

var add = (a) =>{
    let sum = 0;
    for(var i =0 ;i<a.length;i++){
        sum=sum+a[i]
    }
    return sum
}
console.log(add([1,2,3,4,5,6]) )


//--------------------------------------------------------------------------

//4.Return all the prime numbers in an array


//ANONYMOUS FUNCTION

var a = [11,12,13,14,15,16,17,18,19] 
var prime  = function(a){
    cut=a.filter((ele)=>{
for(var i = 2;i<=Math.sqrt(ele);i++){
    if(ele%i==0)return false;
}
return true;
    })
return cut;
}
console.log(prime(a))


//-------------------------------------------------------------------------------------

//IIFE FUNCTION

(function cut (a){
    ant = a.filter((ele)=>{
        for(var i = 2;i<=Math.sqrt(ele);i++){
            if(ele%i==0)return false
        }
        return true
    })
       console.log(ant)
})([2,3,4,5,6,7,8,9,11]);


//-------------------------------------------------------------------------------

//ARROW FUNCTION;

var odd = (a)=>{
    var ant = a.filter((ele)=>{
        for(var i = 2;i<Math.sqrt(ele);i++){
            if(ele%i==0)
            return false;
        }
        return true;
    })
    return ant;
}
console.log(odd([11,12,13,14,15,16,17,18,19]))


//------------------------------------------------------------------------------


//5.Return all the palindromes in an array;

//ANONYMOUS FUNCTION;
var a = ["anna","anni"]
var rev = function(a){
  var ans = a.filter((ele)=>{
    for(var i = 0;i<ele.length;i++){
      if(ele[i]===a[i].split("").reverse().join("")){
        return true
      }
      return ans
    } 
  }
  )
}
console.log(rev(a));

//---------------------------------------------------------------------------

//IIFE FUNCTION


(function rev (a){
  var ans = a.filter((ele)=>{
    for(var i = 0;i<ele.length;i++){
      if(ele[i]===a[i].split("").reverse().join("")){
        return true
      }
      console.log(ans)
    } 
  }
  )
})
(["anna","anni"])

//-----------------------------------------------------------------

//ARROW FUNCTION


var rev = a=>{
  var ans = a.filter((ele)=>{
    for(var i = 0;i<ele.length;i++){
      if(ele[i]===a[i].split("").reverse().join("")){
        return true
      }
      return ans
    } 
  }
  )
}
console.log(rev(["anna","anni"]));


//----------------------------------------------------------------------



//6.Return median of two sorted arrays of the same size.

//ANONYMOUS FUNCTION;

var median  = function(a,b,n){
    var x = 0;
    var y = 0;
    var count ;
    var m1 = -1;
    var m2 = -1;
    for(count = 0;count<=n;count++){
        if(x==n){
            m1=m2;
            m2=b[0];
            break
        }
        else if(y==n){
            m1=m2;
            m2=a[0];
            break;
        }
        if(a[x]<=b[y]){
            m1=m2;
            m2=a[x];
            x++
        }
        else{
            m1=m2;
            m2=b[y];
            y++
        }
    }
    return ((m1+m2)/2);
};
console.log(median([1,2,3,4,5],[6,7,8,9,10],5));


//--------------------------------------------------------------------

//IIFE FUNCTION

(function median(a,b,n){
    var same = a,b,n
    var x = 0;
    var y = 0;
    var count ;
    var m1 = -1;
    var m2 = -1;
    
    for(count = 0;count<=n;count++){
        if(x==n){
            m1=m2;
            m2=b[0];
            break
        }
        else if(y==n){
            m1=m2;
            m2=a[0];
            break;
        }
        if(a[x]<=b[y]){
            m1=m2;
            m2=a[x];
            x++
        }
        else{
            m1=m2;
            m2=b[y];
            y++
        }
        return ((m1+m2)/2)
    }
    
console.log(same)
    
});
([1,2,3,4,5],[6,7,8,9,10],5);


//------------------------------------------------------------------------

//7.Remove duplicates from an array;

//ANONYMOUS FUNCTION;

var arr = [1,2,3,4,5,5];
var dup = function(arr){
var res = [];
for(var i = 0;i<arr.length;i++){
    if(arr[i]!==i){
res.push(arr[i]);
    }

}
return res
}
console.log(dup(arr))


//----------------------------------------------------------------------

//IIFE FUNCTION;

(function dup(arr){
    var res = [];
    for(var i = 0;i<arr.length;i++){
        if(arr[i]!==i){
            res.push(arr[i])
        }
    }
console.log(res)
})
([1,2,3,4,5,5])


//-------------------------------------------------------------------

//8.Rotate an array by k times;

//ANONYMOUS FUNCTION;

var rotate=function(a,k){
    for(var i =0;i<k;i++){
        a.unshift(a.pop())
    }
    return a
}
console.log(rotate([1,2,3,4,5],1))


//--------------------------------------------------------------------------------

//IIFE FUNCTION


(function rotate (a,k){
    for(var i =0;i<k;i++){
        a.unshift(a.pop())
    }
    console.log(a)
})
([1,2,3,4,5],1)


//--------------------------------------------------------------





