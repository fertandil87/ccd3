angular.module('myApp')
    .constant('DOCUMENTOS', {
        serranostandil_principal_horarios: "https://docs.google.com/document/d/1kAlfGfJ8tpv8wW7aSbepDm6epr2ShA5zrSEjuUuBwsE/pub?embedded=true",
        serranostandil_principal_posiciones: "https://docs.google.com/document/d/1MB8EFt7Okp-NXFbOyk1F-mObDcZCOajuqgX97QSQsUY/pub?embedded=true",
        serranostandil_principal_amolestados: "https://docs.google.com/document/d/1MdZPf9taA2GEpAFNv8vHiI24DlZxUYLaQJ3Sf9MmKBA/pub?embedded=true",
        serranostandil_principal_resultados: "https://docs.google.com/document/d/1e_o1QfLP-9IgAj2O1HjDjygIwDjDm3Ht_zSyqPzfPKk/pub?embedded=true",
        serranostandil_cronicas_nahuel: "https://docs.google.com/document/d/1djp1wVgEvSr542M5HzqZmBu3_0vu36NoFgIvRD5E-70/pub?embedded=true",
        serranostandil_cronicas_talleres: "https://docs.google.com/document/d/1joQp3VuY9JU8ZZpSFoDJBGk64TG6Pn6mSIdGTnVp6S4/pub?embedded=true",
        serranostandil_cronicas_boca: "https://docs.google.com/document/d/1AUOurFOMpgyWlsYshnCoflM_4AeB1kUAzssDNLAC6ek/pub?embedded=true",
        serranostandil_cronicas_independiente: "https://docs.google.com/document/d/1pJuoPUzN4ZYLwH2qP5Lrbkc_-ys5WAa59-10eGe3IeM/pub?embedded=true",
        serranostandil_cronicas_rivadavia: "https://docs.google.com/document/d/12SkwgXUtcVde3U8p4NFf5WQRwDQWkh9z8iPhjjWquwo/pub?embedded=true",
        serranastandil_principal_horarios: "https://docs.google.com/document/d/1kAlfGfJ8tpv8wW7aSbepDm6epr2ShA5zrSEjuUuBwsE/pub?embedded=true",
        serranastandil_principal_posiciones: "https://docs.google.com/document/d/1MB8EFt7Okp-NXFbOyk1F-mObDcZCOajuqgX97QSQsUY/pub?embedded=true",
        serranastandil_principal_amolestados: "https://docs.google.com/document/d/1MdZPf9taA2GEpAFNv8vHiI24DlZxUYLaQJ3Sf9MmKBA/pub?embedded=true",
        serranastandil_principal_resultados: "https://docs.google.com/document/d/1e_o1QfLP-9IgAj2O1HjDjygIwDjDm3Ht_zSyqPzfPKk/pub?embedded=true",
        serranastandil_cronicas_todas: "https://docs.google.com/document/d/1djp1wVgEvSr542M5HzqZmBu3_0vu36NoFgIvRD5E-70/pub?embedded=true",
        serranosjunin_principal_horarios: "https://docs.google.com/document/d/1kAlfGfJ8tpv8wW7aSbepDm6epr2ShA5zrSEjuUuBwsE/pub?embedded=true",
        serranosjunin_principal_posiciones: "https://docs.google.com/document/d/1MB8EFt7Okp-NXFbOyk1F-mObDcZCOajuqgX97QSQsUY/pub?embedded=true",
        serranosjunin_principal_amolestados: "https://docs.google.com/document/d/1MdZPf9taA2GEpAFNv8vHiI24DlZxUYLaQJ3Sf9MmKBA/pub?embedded=true",
        serranosjunin_principal_resultados: "https://docs.google.com/document/d/1e_o1QfLP-9IgAj2O1HjDjygIwDjDm3Ht_zSyqPzfPKk/pub?embedded=true",
        serranosjunin_cronicas_todas: "https://docs.google.com/document/d/1djp1wVgEvSr542M5HzqZmBu3_0vu36NoFgIvRD5E-70/pub?embedded=true",
    })
    .constant('MENU', {
        serranostandil: {
            principal: {
                titulo: "Datos Principales",
                secciones: [{
                        titulo: "Horarios",
                        link: "#/serranostandil/principal/horarios",
                    }, {
                        titulo: "Posiciones",
                        link: "#/serranostandil/principal/posiciones",
                    }, {
                        titulo: "Amolestados",
                        link: "#/serranostandil/principal/amolestados",
                    }, {
                        titulo: "Resultados",
                        link: "#/serranostandil/principal/resultados",
                    }]
            },
            cronicas: {
                titulo: "Cronicas",
                secciones: [{
                        titulo: "Nahuel",
                        link: "#/serranostandil/cronicas/nahuel",
                    }, {
                        titulo: "Independiente",
                        link: "#/serranostandil/cronicas/independiente",
                    }, {
                        titulo: "Boca",
                        link: "#/serranostandil/cronicas/boca",
                    }, {
                        titulo: "Rivadavia",
                        link: "#/serranostandil/cronicas/rivadavia",
                    }, {
                        titulo: "Talleres",
                        link: "#/serranostandil/cronicas/talleres",
                    }]
            }
        },
        serranastandil: {
            principal: {
                titulo: "Datos Principales",
                secciones: [{
                        titulo: "Horarios",
                        link: "#/serranastandil/principal/horarios",
                    }, {
                        titulo: "Posiciones",
                        link: "#/serranastandil/principal/posiciones",
                    }, {
                        titulo: "Amolestados",
                        link: "#/serranastandil/principal/amolestados",
                    }, {
                        titulo: "Resultados",
                        link: "#/serranastandil/principal/horarios",
                    }]
            },
            cronicas: {
                titulo: "Cronicas",
                secciones: [{
                        titulo: "Todas las Conicas",
                        link: "#/serranastandil/cronicas/todas",
                    }]
            }
        }
    })

    ;