function closeNewWindow(){
  if(newWin==null || newWin.closed){
    return;
  } else{
    newWin.close();
  }
}