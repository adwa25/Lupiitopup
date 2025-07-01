document.getElementById('topup-button').addEventListener('click', function() {
    const game = document.getElementById('game').value;
    const userId = document.getElementById('user-id').value;
    const serverId = document.getElementById('server-id').value;
    const nominal = document.getElementById('nominal').value;
    const resultMessageDiv = document.getElementById('result-message');

    if (!userId) {
        resultMessageDiv.textContent = 'ID Pengguna harus diisi.';
        resultMessageDiv.className = 'result-message error';
        return;
    }

    const message = `Top Up Berhasil! Game: ${game}, ID Pengguna: ${userId}, Server ID: ${serverId || '-'}, Nominal: Rp ${nominal}`;
    resultMessageDiv.textContent = message;
    resultMessageDiv.className = 'result-message success';

    document.getElementById('user-id').value = '';
    document.getElementById('server-id').value = '';
    document.getElementById('nominal').selectedIndex = 0;
});
