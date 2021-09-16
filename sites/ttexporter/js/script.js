let d = document;
function tweetOpen() {
    d.querySelector('iframe#tweet').setAttribute('src', d.querySelector('input#tweetUrl').value);
}