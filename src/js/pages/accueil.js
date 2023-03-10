import { create } from "../main";

export const toggleAccueil = () => {
    const main = document.querySelector("#app")
    main.replaceChildren("")

    create("h2", main, "Bienvenue sur GoBus, la solution collaborative pour la gestion de vos trajets en bus !", null, "titreAccueil")
    
    // Présentation du site
    const paragraphe1 = create("div", main, null, ["paragraphe"])
    const p1 = create("h3", paragraphe1)
    create("span", p1, "GoBus", ["GoBus_titre"])
    p1.innerHTML += " permet au "
    create("span", p1, "seul", ["GoBus_role"])
    p1.innerHTML += " gérant, aux "
    create("span", p1, "2", ["GoBus_role"])
    p1.innerHTML += " responsables logistiques ainsi qu'aux "
    create("span", p1, "6", ["GoBus_role"])
    p1.innerHTML += " chauffeurs de bus de planifier leur emploi du temps de manière optimale, collaborative et en temps réel."
    
    // image
    create("img", paragraphe1, null, null, "imgPres").src = "src/assets/images/bus.png"

    // Présentation du chauffeur de bus
    const paragraphe2 = create("div", main, null, ["paragraphe"])
    create("h3", paragraphe2, "Vous êtes un chauffeur de bus ?", ["phrasePres"])
    const p2 = create("p", paragraphe2, null, ["sous_paragraphe"])
    create("span", p2, "Consultez", ["GoBus_role"])
    p2.innerHTML += " donc votre emploi du temps personnel, et "
    create("span", p2, "indiquez", ["GoBus_role"])
    p2.innerHTML +=  " vos créneaux d'indisponibilité !"
    create("a", paragraphe2, "Voir votre espace utilisateur").href = "/espaceUser"

    // Présentation du responsable logistique
    const paragraphe3 = create("div", main, null, ["paragraphe"])
    create("h3", paragraphe3, "Vous êtes un responsable logistique chargé d'administrer des chauffeurs de bus ?", ["phrasePres"])
    const p3 = create("p", paragraphe3, null, ["sous_paragraphe"])
    create("span", p3, "Accédez", ["GoBus_role"])
    p3.innerHTML += " donc à leur emploi du temps, et "
    create("span", p3, "affectez", ["GoBus_role"])
    p3.innerHTML +=  " leur des créneaux de conduite afin de piloter les différentes lignes de bus à disposition !"
    create("a", paragraphe3, "Voir votre espace administrateur").href = "/espaceAdmin"

    // Présentation du gérant
    const paragraphe4 = create("div", main, null, ["paragraphe"])
    create("h3", paragraphe4, "Vous êtes un gérant en charge d'un réseau de bus ?", ["phrasePres"])
    const p4 = create("p", paragraphe4, null, ["sous_paragraphe"])
    create("span", p4, "Organisez", ["GoBus_role"])
    p4.innerHTML += " et "
    create("span", p4, "planifiez", ["GoBus_role"])
    p4.innerHTML +=  " des réunions, "
    create("span", p4, "gérez", ["GoBus_role"])
    p4.innerHTML +=  " et "
    create("span", p4, "visualisez", ["GoBus_role"])
    p4.innerHTML += " l'emploi du temps des différentes lignes de bus !"
    create("a", paragraphe4, "Voir votre espace administrateur").href = "/espaceAdmin"

    // Présentation des fonctionnalités
    const paragraphe5 = create("div", main, null, ["paragraphe", "paragraphe_info"])
    create("p", paragraphe5, "Notre plateforme intuitive offre une interface facile à utiliser pour chacun des rôles, ainsi qu'une vue d'ensemble en temps réel de l'emploi du temps de l'ensemble de l'entreprise. ")
    const p5 = create("p", paragraphe5)
    create("span", p5, "GoBus", ["GoBus_titre"])
    p5.innerHTML += " est conçu pour être une solution simple et efficace pour la planification collaborative, aidant ses employés à économiser du temps et à augmenter leur productivité."

    // Connexion
    const paragraphe6 = create("div", main, null, ["paragraphe"])
    const p6 = create("p", paragraphe6)
    create("span", p6, "Connectez-vous", ["GoBus_role"])
    p6.innerHTML += " dès maintenant pour découvrir toutes les fonctionnalités de "
    create("span", p6, "GoBus", ["GoBus_titre"])
    p6.innerHTML += "."
    create("a", paragraphe6, "Connexion").href = "/adminForm"

    return main
}