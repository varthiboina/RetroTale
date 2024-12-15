
var themeVariable = [];

function theme(themeName)
{
    if(themeName == "retro")
    {
        themeVariable = {
            home : 'mainpage_r'
        }

    }
    else if(themeName == "classic")
    {   
        themeVariable = {
            home : 'mainpage_c'
        }

    }
    return themeVariable;

}

module.exports = theme;
