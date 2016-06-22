var readline = require('readline');
function completer(line) {
    var completions = '.help .error .exit .quit .q'.split(' ')
    var hits = completions.filter(function(c) { return c.indexOf(line) == 0 })
    // show all completions if none found
    return [hits.length ? hits : completions, line]
}
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    completer:completer
});
rl.setPrompt('>>');
rl.prompt()
rl.question('say something?\n', function (e) {

    console.log('you say:' + e);
    rl.close();
})