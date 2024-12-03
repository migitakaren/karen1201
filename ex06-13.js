function mes(){alert("3秒経ちました！");}
function hyoji13(){
//表示する文字 
var str13 ="一文字ずつ表示します。";
//テキストボックスの文字数 
var cnt13 =document.timer13.moji13.value.length;
//文字が全部表示されているか確認
if(cnt13<11){
//現在より１文字多く切り出して表示　
document.timer13.moji13.value=str13.substr(0,cnt13+1);}
else{
//全て表示されたら、空文字に戻す 
document.timer13.moji13.value="";}}
function startfnc(){
//関数hyoji()を1000ミリ秒間隔で呼び出す 
setInterval("hyoji13()",1000);}
