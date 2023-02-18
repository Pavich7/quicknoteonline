document.getElementById('heading').innerHTML = localStorage['title'] || 'Welcome to QuickNote Online!';
document.getElementById('content').innerHTML = localStorage['text'] || 'Text you type will be saved into your browser!';

 setInterval(function() {
      localStorage['title'] = document.getElementById('heading').innerHTML;
      localStorage['text'] = document.getElementById('content').innerHTML;
 }, 1000);