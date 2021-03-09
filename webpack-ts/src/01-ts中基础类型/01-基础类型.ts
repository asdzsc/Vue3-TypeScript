// 基本类型
(() => {
   // 布尔类型 ---boolean
   // 基本语法 let 变量名:数据类型=值
   let flag: boolean = true
   console.log(flag);
   // 数字类型 ---number
   let a1: number = 10 //十进制
   let a2: number = 0b1010 //二进制
   let a3: number = 0o12 //八进制
   let a4: number = 0xa //十六进制
   console.log(a1);
   console.log(a2);
   console.log(a3);
   console.log(a4);
   // 字符串类型 ---string
   let str1: string = "床前明月光"
   let str2: string = "小明去开窗"
   let str3: string = "遇到一耳光"
   let str4: string = "牙齿掉光光"
   console.log(`${str1},${str2},${str3},${str4}`);
   // 字符串和数字能否拼接
   let str5: string = "我有这么多钱"
   let money: number = 1000
   console.log(str5 + money);
   // ts中变量一开始是什么类型，那么后期赋值的时候，只能用这个类型的数据、
   // 不允许其他赋值其他的类型给这个变量
   // 如:let str:string = "真香" str = 100(报错)
   console.log("🚀 ------------------------------------分隔符 ");

   let und: undefined = undefined
   let nul: null = null
   console.log(und);
   console.log(nul);
   // undefined和null都可以作为其他类型的子类型，把undefined和null赋值给其他类型的变量 如：number类型的变量
   /**
    *  let num2: number = undefined
       let num3: number = nul
       console.log(num2);
       console.log(num3);
    */
   console.log("🚀 ------------------------------------分隔符 ");

   // 数组类型
   // 定义方式1
   // 语法 let 变量名:数据类型[] = [值1,值2,值3]
   let arr: number[] = [10, 20, 30]
   console.log(arr);
   // 定义方式2 泛型的写法
   // 语法 let 变量名 Array<数据类型> = [值1,值2,值3]
   let arr1: Array<number> = [10, 20, 30]
   console.log(arr1);
   // 注意问题:数组在定义后，里面的数据类型必须和定义数组的时候定义的类型所保持一致，否则会有错

   // 元组类型 在定义数组的时候，类型和数据的个数一开始就限定了
   let arr2: [string, number, boolean] = ['10', 10.123456, true]

   console.log(arr2[0].split(''));
   console.log(arr2[1].toFixed(2));
   console.log(arr2);

   console.log("🚀 ------------------------------------分隔符 ");
   // 枚举类型 ---enum 枚举里面的每个数据值都可以叫做元素，每个元素都有自己的编号，编号是从0开始的依次递增+1

   enum Color {
      red, green, blue
   }
   // 定义一个color的枚举类型的变量来接受枚举的值
   let color: Color = Color.red
   console.log(color);
   console.log(Color.red, Color.green, Color.blue);
   console.log(Color[0]);


   console.log("🚀 ------------------------------------分隔符 ");

   // any类型
   // let str: any = 110
   // str = "年少不知富婆好，错吧少女当成宝"
   // console.log(str);

   // 当一个数组中存放多个数据，个数不确定，类型不确定 此时可以使用any类型来定义数组
   let arrAny: any = [100.12456, '年少不知软饭香，错把青春倒插秧', true]
   console.log(arrAny[0].toFixed(2));
   // console.log(arrAny[0].split('')); 这种情况也没有报错信息 any有优点、也有缺点
   console.log(arrAny[1].split(''));
   console.log(arrAny);

   // void类型，在函数声明的时候，小括号的后面使用void，代表该函数没有任何返回值

   function showMsg(): void {
      console.log('只要富婆把握住，连夜搬进大别墅');
      // return
      // return undefined
      // return null
   }
   console.log(showMsg());

   let vod: void = undefined
   // 定义一个void的变量，可以接收一个undefined值，意义不大
   console.log(vod);

   console.log("🚀 ------------------------------------分隔符 ");

   // Object类型
   // 定义一个函数 参数是object类型，返回值也是object类型
   function getObj(obj: object): object {
      console.log(obj);
      return {
         name: "Leo",
         age: 12
      }
   }
   console.log(getObj({
      name: 'Tom',
      age: 18
   }));
   // console.log(getObj('123')); 类型“string”的参数不能赋给类型“object”的参数。
   console.log(getObj(new String('123')));
   console.log(getObj(String));

   console.log("🚀 ------------------------------------分隔符 ");
   // 联合类型(Union Types) 表示取值可以为多种类型的一种
   // 需求1：定义一个函数得到一个数字或字符串形式值

   function getStr(str: number | string): string {
      return str.toString()
   }
   console.log(getStr(123));

   // 需求2；定义一个函数得到一个数字或字符串值的长度

   // 类型断言：告诉浏览器 我知道我自己是什么类型，知道自己要干什么
   // 类型断言的方法1：<类型>变量
   // 类型断言的方法2：值 as 类型
   function getNum(str: number | string): any {
      // return str.toString().length
      //如果str本身就是string是不需要调用toString方法的
      if ((<string>str).length) {
         // return (<string>str).length
         return (str as string).length
      } else {
         // 此时说明str是number类型
         return str.toString().length
      }
   }
   console.log(getNum("123456"));
   console.log(getNum(123456));


   // 类型推断是指没有明确指定类型的时候自动推测出一个类型
   // let txt = 100 number类型
   // txt = 'str'
   // console.log(txt);

   let txt2 //any类型
   txt2 = 123
   txt2 = 'Tom真帅'
   console.log(txt2);


})()