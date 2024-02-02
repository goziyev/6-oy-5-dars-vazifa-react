function LocalStoragePush(data){
    localStorage.setItem('todos',JSON.stringify(data))
}
function LocalStorageGet(){
    return JSON.parse(localStorage.getItem('todos'))
}

function validate(input) {
    if ( input.length <= 3 || !input || !input.trim()) {
      alert(
        "Kiritilgan ishoralar soni 3 tadan kam bo'lishi va probellardan tashkil topgan bolishi mumkin emas"
      );
      return false;
    }
    return true;
  }

export {LocalStoragePush,LocalStorageGet,validate}