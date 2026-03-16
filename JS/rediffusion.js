const CLIENT_ID = '9yvfen0jpshn2n1dl46babgorq67y5';
const CLIENT_SECRET = 'fyt2e6juwpazt2i71isdoepvuphz4y';
const CHANNEL = 'formula_cim_league';

async function getToken() {
    const res = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`, {
        method: 'POST'
    });
    const data = await res.json();
    return data.access_token;
}

async function checkLive() {
    const token = await getToken();
    const res = await fetch(`https://api.twitch.tv/helix/streams?user_login=${CHANNEL}`, {
        headers: {
            'Client-ID': CLIENT_ID,
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await res.json();
    const stream = data.data[0];
    const badge = document.getElementById('status-badge');
    const viewers = document.getElementById('viewer-count');

    if (stream) {
        badge.textContent = '🔴 EN LIVE';
        badge.style.color = '#e10600';
         viewers.textContent = `👁 ${stream.viewer_count} viewers`;
     } else {
         badge.textContent = '⚫ HORS LIGNE';
         badge.style.color = '#888';
        viewers.textContent = '';
    }
}
checkLive();
setInterval(checkLive, 60000); // Vérifie toutes les 60 secondes