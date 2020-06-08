const theme = {
    colors: {
        //font
        text: "#5b6f82",
        text_light: "#92a2b1",
        text_dark: "#202b36",
        //background
        bg: "#f6f6f6",
        bg_light: "#fbfafb",
        bg_dark: "#0A101B",
        //primary
        primary: "#6c5ce7",
        primary_light: "#7b88ff",
        //secondary
        secondary: "#fdcb6e",
        secondary_light: "#fff3b1",
        //others
        success: "#28b859",
        error: "#ff6b76",
        warning: "#fabd42"
    },
    responsive: {
        smallest: "only screen and (max-width: 25em)", //275px -> mobile-pequeno
        smaller: "only screen and (max-width: 31.25em)", //500px -> mobile
        small: "only screen and (max-width: 37.5em)", //600px -> tablet
        medium: "only screen and (max-width: 56.25em)", //900px -> ipad
        large: "only screen and (max-width: 80em)", //1300px -> landscale
        larger: "only screen and (max-width: 90em)", //1300px -> laptop
        largest: "only screen and (max-width: 97em)" //1500px -> desktop
    },
    typo: {
        roboto: "'Roboto', sans-serif;",
        montserrat: "'Montserrat', sans-serif;",
        raleway: "'Raleway', sans-serif;",
        poppins: "'Poppins', sans-serif;"
    }
}

export default theme
