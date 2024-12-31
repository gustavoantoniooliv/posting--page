document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var title = document.getElementById('titleInput').value;
    var content = document.getElementById('contentInput').value;

document.getElementById('titleRender').innerText = title;
    document.getElementById('contentRender').innerText = content;
    document.getElementById('blogForm').reset();
});