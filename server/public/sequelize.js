document.getElementById('').addEventListener('submit', async(e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const password = e.target.age.value;
    const email = e.target.email.value;
    const mento = e.target.mento.checked;
    const game_id = e.target.game_id.value;

    if(!name){
        return alert('no name');
    }
    if(!password){
        return alert('no password');
    }
    if(!email){
        return alert('no email');
    }
})