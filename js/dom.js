document.getElementById('apply-bg').addEventListener('click', function () {
    // console.log('successfull');
    const friends = document.getElementsByClassName('friend');
    console.log(friends);

    for (const myfriend of friends) {
        // console.log(myfriend);

        myfriend.style.backgroundColor = 'blue';

    }
});


document.getElementById('center-third').addEventListener('click', function () {
    const f3 = document.getElementById('friend3');
    f3.style.textAlign = 'center';
});


document.getElementById('add-new-friend').addEventListener('click', function () {
    const addnewfriend = document.createElement('div');
    addnewfriend.innerHTML = `
   <h3 class="friend-name">friend-6</h3>
   <p>Porro sequi nam aperiam officiis erendis aspernatur
       
       necessitatibus earum.</p>
   `;

    const container = document.getElementById('container');
    container.appendChild(addnewfriend);
});

