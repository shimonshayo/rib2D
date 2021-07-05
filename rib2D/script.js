debugger
function print2D() {
    let rib = document.getElementById('print2D').value;
    for (let y = 0; y < rib; y++) {
        for (let x=0 ; x < rib; x++) {
            if (x==y || y==(rib-1)-x || y==(rib-1)/2 || x==(rib-1)/2 ){document.write('*');}
            else {document.write('#');}
        }
        document.write('<br>');
    }
    
}