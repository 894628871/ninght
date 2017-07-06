				//1、冒泡排序
	var arr = [5,8,3,6,9]
	for(var i=0;i<arr.length;i++){
	 for(var j=i+1;j<arr.length;j++){
	 	 if(arr[i]>arr[j]){
	 	 	var temp
	 	 	temp=arr[i];
	 	 	arr[i]=arr[j];
	 	 	arr[j]=temp;
		 	 }

		 }
	}
	 console.log(arr)


	 //2、字符串出现最多个数（2种）
	 //.str=”abcdefgaaass”找字符中出现最多的;第一种
	 	var str ='abcdefgaaass'
          var newarr=str.split("");
          var max=0,val="";
          function fn(arr,a){
            var count=0;
            for(var i=0;i<arr.length;i++){
                if(arr[i]==a){
                  count++;
                }
            }
            return count;
          }
          for(var i=0;i<newarr.length;i++){
              var ind=fn(newarr,newarr[i]);
              if(ind>max){
                max=ind;
                val=newarr[i];
              }
          }
          console.log("出现最多的字符是"+val+"出现的次数是"+max)
          //第二种
          var strr='aaasssssbbbcccccccccccccccccccccc'
          function change(arr){
          	for(var j=0,len=0,str1='';j<arr.length;j++){
          	var x = arr.substr(j,1);
          	var y = arr.split(x);
          	if(y.length-1>len){
          		len = y.length-1;
          		str1=x+','+len;

          	}
          }
				return str1;
          }
          
          console.log(change(strr));

		
		//3、编程实现，往数组里插入一个元素
		var arr = ["1411A","44","34305","djg","pic"];
		function fun3(ar,index,date){
			for(var i=ar.length-1;i>=index;i--){
				ar[i+1]=ar[i];
			}
			ar[index] = date;
		}
		fun3(arr,2,"hello");
		console.log(arr);


		//4、编程实现IndexOf方法
		var brr=[5,9,6,3,2,5];
		function indexfun(arr,val){
			for(var i=0;i<arr.length;i++){
				if(arr[i]==val){
					return i;
				}

			}
			return -1;
		}
		console.log(indexfun(brr,13));