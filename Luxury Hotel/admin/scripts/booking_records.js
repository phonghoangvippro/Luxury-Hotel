function get_bookings(search = '') 
{
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "ajax/booking_records.php", true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onload = function () {
    document.getElementById('table-data').innerHTML = this.responseText;
  }

  xhr.send('get_bookings&search=' + search);
}

function change_page(page){
  get_bookings(document.getElementById('search_input').value,page);
}

function download(id){
  window.location.href = 'generate_pdf.php?gen_pdf&id='+id;
}


window.onload = function(){
  get_bookings();
}