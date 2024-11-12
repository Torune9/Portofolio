const burger = document.getElementById('burger')

const list = document.getElementById('list')

burger.addEventListener('click',()=>{
    list.classList.toggle('side')
    return burger.classList.toggle('burger-slash')
})

list.addEventListener('click',()=>{
    list.classList.toggle('side')
    return  burger.classList.toggle('burger-slash')
})

const blob = document.getElementById('blob')

const body = document.querySelector('#background')

document.addEventListener('pointermove', (e) => {
    // Dapatkan posisi mouse relatif terhadap jendela
    const x = e.clientX; // Posisi horizontal
    const y = e.clientY; // Posisi vertical

    body.style.backgroundPosition = `${e.clientX}px ${e.clientY}px`;

    // Set posisi containe
    // Dapatkan ukuran blob
    const blobRect = blob.getBoundingClientRect();
    const blobWidth = blobRect.width; // Lebar blob
    const blobHeight = blobRect.height; // Tinggi blob

    // Set posisi blob di tengah kursor
    blob.style.left = (x - blobWidth / 2) + "px";
    blob.style.top = (y - blobHeight / 2) + "px";

    const pointerRect = blob.getBoundingClientRect();
    const elements = document.querySelectorAll("h1");
    let isOverlapping = false; // Flag untuk mengecek apakah ada overlap

    elements.forEach(e => {
        let location = e.getBoundingClientRect();

        // Mengecek apakah pointerRect bertumpuk dengan elemen h1
        if (
            pointerRect.left < location.right &&
            pointerRect.right > location.left &&
            pointerRect.top < location.bottom &&
            pointerRect.bottom > location.top
        ) {
            isOverlapping = true; // Ada overlap
        }
    });

    if (isOverlapping) {
        blob.style.backdropFilter = "invert(100%)";
        blob.style.transform = "scale(1.5)"
    } else {
        blob.style.backdropFilter = "invert(0%)";
        blob.style.transform = "scale(1)"
    }
});

document.addEventListener("pointerout", () => {
    blob.style.transform = "scale(0)"
  });

document.querySelectorAll('.list-container').forEach(listContainer => {
    listContainer.querySelectorAll('li').forEach(item => {
        // Ambil teks dalam elemen <li>
        const text = item.innerText.trim();
        
        // Hapus konten lama dari elemen <li>
        item.innerHTML = '';
        
        // Buat elemen <span> baru untuk setiap karakter dan tambahkan ke <li>
        [...text].forEach(char => {
            const charSpan = document.createElement('span');
            charSpan.innerText = char; // Masukkan karakter ke dalam <span>
            item.appendChild(charSpan); // Tambahkan <span> ke dalam <li>
        });
    });
});


  